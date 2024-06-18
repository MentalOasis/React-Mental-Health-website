

import { useEffect, useRef } from "react";
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
// const Game = () => {
  
//   const gameContainerRef = useRef(null);
//   useEffect(() => {
//     if (gameContainerRef.current) {
//       // Initialize Kaplay.js with the DOM element reference
//       const k = kaboom({
//         global: true,
//         width: 640,
//         height: 480,
//         canvas: gameContainerRef.current,
//         background: [141, 183, 255],        
//       });
    //   // Add a sprite for proof of concept
    //   k.loadSprite("bean", "https://kaboomjs.com/sprites/bean.png");
    //   k.setGravity(3200);
    //   // Add a simple Kaplay.js game logic
    //   const player = k.add([
    //     k.sprite("bean"),
    //     k.pos(120, 80),
    //     k.area(),
    //     k.body(),
    //   ]);
    //   // Define controls
    //   k.onKeyDown("left", () => {
    //     player.move(-120, 0);
    //   });
    //   k.onKeyDown("right", () => {
    //     player.move(120, 0);
    //   });
    //   k.onKeyDown("up", () => {
    //     player.jump();
    //   })

//     }
//   }, []);
//   return <canvas ref={gameContainerRef} />;
// }
  
// export default Game;






// import "./Game2.jsx"
import "./preguntaslargas.js"
import "./preguntas.js"
import "./preguntascortas.js"
import "./style2.css"
import Game from "./Game2.jsx"


const GameContainer = () => {
    return (
        <>
            <div id="game-container" tabindex="0">
                <div id="question-container" style={{display: "none"}}>
                    <div id="question"></div>
                    <button class="option-btn" id="optionA"></button>
                    <button class="option-btn" id="optionB"></button>
                    <button class="option-btn" id="optionC"></button>
                    <button class="option-btn" id="optionD"></button>
                </div>
            </div>
            <Game/>

            {/* <iframe title="Juego" src="index2.html" width="100%" height="100%" frameBorder="0"></iframe> */}
        </>
    );
}

export default GameContainer;
