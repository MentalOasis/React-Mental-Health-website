
// Importa el modelo de usuario
const User = require("../../models/user");

// Controlador para actualizar y devolver el puntaje del usuario
// const updateUserScore = async (req, res) => {
//     const userId = req.params.userId; // ID del usuario desde los parámetros de la URL
//     const { score } = req.body; // Puntaje actualizado recibido en el cuerpo de la solicitud

//     try {
//         // Busca al usuario por su ID y actualiza el puntaje
//         const user = await User.findByIdAndUpdate(userId, { score }, { new: true });

//         if (!user) {
//             return res.status(404).json({ message: "Usuario no encontrado" });
//         }

//         // Devuelve el usuario actualizado con su puntaje
//         res.status(200).json({ user });
//     } catch (error) {
//         console.error("Error al actualizar puntaje del usuario:", error);
//         res.status(500).json({ message: "Error al actualizar puntaje del usuario" });
//     }
// };

// module.exports = { updateUserScore };


async function updateScore(req, res) {
    const { userId } = req.params; // Id del usuario
    const { score } = req.body;    // Nuevo puntaje

    try {
        // Buscar y actualizar el usuario por su Id
        const user = await User.findByIdAndUpdate(userId, { score }, { new: true });

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