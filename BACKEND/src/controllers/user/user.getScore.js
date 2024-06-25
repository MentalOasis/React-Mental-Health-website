
const User = require("../../models/user");

async function getUserScore(req, res) {
    const { userId } = req.params; // Id del usuario

    try {
        // Buscar el usuario por su Id
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Enviar el puntaje del usuario como respuesta
        return res.json({ score: user.score });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getUserScore;
