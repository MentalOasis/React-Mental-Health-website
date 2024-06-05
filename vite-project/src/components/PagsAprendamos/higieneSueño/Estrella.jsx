
import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { showRectangle, hideRectangle } from './funcion.js';


const Estrella = ({ consejo, index, claseEstrella }) => {
    return (
        <>
            <div className={`star ${claseEstrella}`} onClick={(event) => showRectangle(event, index)}>
                <span className="anticon"><StarFilled /></span>
            </div>
            <div className="rectangle" id={`rectangle-${index}`} onClick={() => hideRectangle(index)}>
                <p>{consejo.text}</p>
            </div>
        </>
    );
}

export default Estrella;

