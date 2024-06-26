
// const token = localStorage.getItem('token');
// console.log(token);


import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    console.log("Token encontrado:", token);

    if (!token) {
        console.log("No se encontró token, redirigiendo a /iniciar-sesion");
        return <Navigate to="/iniciar-sesion" />;
    }

    try {
        const decodedToken = jwtDecode(token, { header: true }); // Usa jwt_decode para decodificar el token
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
            console.log("Token expirado, redirigiendo a /iniciar-sesion");
            localStorage.removeItem('token');
            return <Navigate to="/iniciar-sesion" />;
        }
    } catch (error) {
        console.log("Token inválido, redirigiendo a /iniciar-sesion");
        localStorage.removeItem('token');
        return <Navigate to="/iniciar-sesion" />;
    }

    console.log("Token válido, accediendo a la ruta protegida");
    return children;
};

export default ProtectedRoute;

