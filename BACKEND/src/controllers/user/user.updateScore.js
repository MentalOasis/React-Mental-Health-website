
// Importa el modelo de usuario
const User = require("../../models/user");

async function updateScore(req, res) {
    const { userId } = req.params; // Id del usuario
    const { score } = req.body;    // Nuevo puntaje
 console.log(userId)
    try {
        // Buscar y actualizar el usuario por su Id
        const user = await User.findByIdAndUpdate(userId, { score }, { new: true });
        console.log(user)

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Enviar el usuario actualizado como respuesta
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports =  updateScore;