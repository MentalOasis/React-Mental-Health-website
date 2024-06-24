
// Importa el modelo de usuario
const User = require("../../models/user.models");

// Controlador para actualizar y devolver el puntaje del usuario
const updateUserScore = async (req, res) => {
    const userId = req.params.userId; // ID del usuario desde los parámetros de la URL
    const { score } = req.body; // Puntaje actualizado recibido en el cuerpo de la solicitud

    try {
        // Busca al usuario por su ID y actualiza el puntaje
        const user = await User.findByIdAndUpdate(userId, { score }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Devuelve el usuario actualizado con su puntaje
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error al actualizar puntaje del usuario:", error);
        res.status(500).json({ message: "Error al actualizar puntaje del usuario" });
    }
};

module.exports = { updateUserScore };
