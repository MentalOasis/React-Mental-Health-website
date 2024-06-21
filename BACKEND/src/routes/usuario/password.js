const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// POST request to initiate password reset
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'El correo electrónico proporcionado no está registrado' });
        }

        // Generate reset token
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        await user.save();

        // Send email with password reset link
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Recuperación de Contraseña',
            text: `Hola ${user.name},\n\n
                  Has solicitado restablecer tu contraseña.\n\n
                  Por favor, haz click en el siguiente enlace o pégalo en tu navegador para completar el proceso:\n\n
                  http://${req.headers.host}/reset/${token}\n\n
                  Si no solicitaste esto, por favor ignora este correo y tu contraseña seguirá sin cambios.\n`
        };

        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                console.error('Error al enviar el correo de recuperación de contraseña:', err);
                return res.status(500).json({ success: false, message: 'Error al enviar el correo de recuperación de contraseña. Por favor, inténtalo de nuevo más tarde.' });
            }
            res.status(200).json({ success: true, message: 'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña' });
        });

    } catch (error) {
        console.error('Error al procesar la solicitud de recuperación de contraseña:', error);
        res.status(500).json({ success: false, message: 'Error al procesar la solicitud de recuperación de contraseña. Por favor, inténtalo de nuevo más tarde.' });
    }
});

// POST request to reset password
router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const user = await UserModel.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });

        if (!user) {
            return res.status(400).json({ success: false, message: 'El enlace de restablecimiento de contraseña no es válido o ha expirado.' });
        }

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        res.status(200).json({ success: true, message: 'Contraseña restablecida exitosamente. Ahora puedes iniciar sesión con tu nueva contraseña.' });

    } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        res.status(500).json({ success: false, message: 'Error al intentar restablecer la contraseña. Por favor, inténtalo de nuevo más tarde.' });
    }
});

module.exports = router;
