import { useState } from "react";
import "/Aprendamos.css";
import '/classicalpiano.mp3';




const items = [
  {
    header: "¿Cómo te sientes emocionalmente ahora mismo?",
    image: image1,
    symbol : "sentiment_stressed",
    text: `Sintoniza con tu cuerpo y mente! Aprende a reconocer las señales de estrés y ansiedad para poder abordarlas con confianza y calma. Descubre cómo cuidarte y mantenerte en equilibrio en tu día a día.
    -Descubre Cómo tu Cuerpo te Habla sobre el Estrés.
    -Aprende a Identificar las Señales de Ansiedad.
    -Trucos para Calmar tu Mente y Recargar tu Energía.`,
  },
  {
    header: "Reconocer signos de Estrés - Ansiedad",
    image: image2,
    symbol: "sentiment_dissatisfied",
    text: `Aprenda a identificar signos de estrés en ti misma o en los demás. Descubra formas saludables de afrontar el estrés y la ansiedad`,
  },
  {
    header: "La importancia de la autoestima",
    image: image3,
    symbol: "", 
    text: `Se asocia directamente con una mayor satisfacción con la vida y una menor incidencia de problemas de salud mental, como la depresión y la ansiedad.`,
  },
  {
    header: " Bienestar Emocional ",
    image: image4,
    symbol: "sentiment_worried",
    text: `Tipos de Inteligencia: Aprende sobre los diferentes tipos de inteligencia y cómo se relacionan con tu bienestar emocional.`,
  },
  {
    header: "Alimentación Nutritiva: Guía para una Relación Saludable con la Comida y tu Cuerpo",
    image: image5,
    symbol: "recommend", 
    text: `Aprende consejos prácticos para desarrollar una relación saludable e intuitiva con la comida.
    Explora recursos sobre cómo escuchar las señales de tu cuerpo y tomar decisiones alimentarias conscientes.`,
  },
  {
    MusicPlayer : () => {
        return (
          <div className="music-player">
            <div className="album-cover" style={{ backgroundImage: `url(./pic/imagen5.jpg)` }}></div>
            <div className="song-info">
              <h2 className="song-title">Relajación</h2>
              <h3 className="artist">Xhisfire</h3>
            </div>
            <audio src="/audio/classicalpiano.mp3" controls></audio>
          </div>
        );
      },
  },
];

export const ImgAccordion = () => {
  const [active, setActive] = useState(2); //parte desde la 3 

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <div
        className="image-accordion-background"
        style={{ backgroundImage: `url(${items[active].image})` }}
      ></div>
      
        <div className="title-container">
          <h1>¿Cómo me siento?</h1>
        </div>
        <div className="image-accordion">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`image-accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
             
              <img src={item.image} />
              
              {active !== index && (
                  <span className="image-accordion-item material-symbols-outlined">{item.symbol}</span>
                )}
                
            
              <div className="content">
              
              
                <div className="card">
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <EmojiChart/> */}
      
      
    </>
  );
};

export default Aprendamos;