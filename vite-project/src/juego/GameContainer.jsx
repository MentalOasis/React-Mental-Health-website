
import "./game2.js"
import "./preguntaslargas.js"
import "./preguntas.js"
import "./preguntascortas.js"
import "./style2.css"
import React, { useEffect, useRef } from 'react';
import Iframe from '@trendmicro/react-iframe';


const GameContainer = () => {
    return (
        <>
            <div id="game-container" tabindex="0">
                <div id="question-container" style="display: none;">
                    <div id="question"></div>
                    <button class="option-btn" id="optionA"></button>
                    <button class="option-btn" id="optionB"></button>
                    <button class="option-btn" id="optionC"></button>
                    <button class="option-btn" id="optionD"></button>
                </div>
            </div>

            <iframe title="Juego" src="index.html" width="100%" height="100%" frameBorder="0"></iframe>
        </>
    );
}

export default GameContainer;
