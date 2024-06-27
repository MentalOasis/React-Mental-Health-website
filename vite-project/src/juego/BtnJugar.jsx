


import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvisibleButton = ({ position }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/juego');
    };

    return (
        <button 
            onClick={handleClick}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: '240px',
                height: '80px',
                backgroundColor: 'black',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10, // Asegúrate de que el botón esté por encima del canvas de Kaboom
            }}
        >
            {/* Botón invisible */}
        </button>
    );
};

export default InvisibleButton;
