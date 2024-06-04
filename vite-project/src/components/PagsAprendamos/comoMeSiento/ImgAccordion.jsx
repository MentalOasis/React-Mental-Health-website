import { useState } from "react";
import "./stylesAccordion.css";
import image1 from "/pic/Designer (43).jpeg"; ///CUIDADO, NO FUNCIONA CON ./
import image2 from "/pic/Designer (67) (1).jpeg";
import image3 from "/pic/Designer (52).jpeg";
import image4 from "/pic/Designer (39).jpeg";
import image5 from "/pic/Designer (64).jpeg";
import EmojiChart from './EmojiChart.jsx';



const items = [
  {
    header: "¿Qué es el estrés y cómo lo identifico?",
    image: image1,
    symbol : "sentiment_stressed",
    text: `El estrés es una respuesta física y mental del cuerpo ante situaciones que se perciben como desafiantes o amenazantes. Es una reacción natural a diversos factores, y la adolescencia puede ser una etapa estresante en sí misma debido a los cambios físicos, emocionales y sociales que se experimentan. Sin embargo, si los niveles de estrés son muy altos y se poseen preocupaciones constantes, síntomas físicos (como dolores de cabeza y problemas gastrointestinales) o cambios en el comportamiento (como estar más irritable) es recomendable buscar apoyo en el entorno y asesoría de un profesional para afrontar la situación.`,
  },
  {
    header: "¿Qué es la depresión y cómo la distingo? ",
    image: image2,
    symbol: "sentiment_dissatisfied",
    text: `La depresión va más allá de la tristeza normal. Se caracteriza por una sensación persistente de tristeza, pérdida de interés en actividades que solían ser placenteras, cambios en el apetito y el sueño, falta de energía, dificultad para concentrarse y sentimientos de culpa o inutilidad.
    La depresión puede interferir significativamente en la vida diaria de una persona y afectar su capacidad para funcionar adecuadamente, por lo que es importante buscar ayuda profesional si se sospecha que se está experimentando depresión, ya que el tratamiento adecuado puede marcar la diferencia en la recuperación y el bienestar mental.
    `,
  },
  {
    header: "¿Cómo me siento?",
    image: image3,
    symbol: "home", 
    text: `
    La adolescencia es un período crucial para el desarrollo de hábitos sociales y emocionales importantes para el bienestar mental. 
    Durante esta etapa, los jóvenes experimentan una serie de cambios físicos, emocionales y sociales que pueden influir en cómo se sienten, 
    es por ello que es fundamental que se promueva su salud mental, a través de intervenciones que fortalezcan su capacidad para regular las emociones,
    fomentar comportamientos saludables y desarrollar la resiliencia para hacer frente a situaciones difíciles. Estas intervenciones se centran 
    en potenciar alternativas a los comportamientos de riesgo, promover entornos y redes sociales favorables y brindar herramientas para gestionar 
    de manera saludable las emociones.
    `,
  },
  {
    header: "¿Qué es la ansiedad y cómo la identifico?    ",
    image: image4,
    symbol: "sentiment_worried",
    text: `La ansiedad es una respuesta emocional normal ante situaciones de estrés, pero cuando se vuelve persistente e intensa, puede afectar tu vida diaria. Se caracteriza por sentimientos de preocupación, nerviosismo y miedo. Puedes notar síntomas físicos como palpitaciones, sudoración, temblores, y molestias en el estómago. La ansiedad también puede manifestarse a través de pensamientos constantes de preocupación, dificultad para concentrarse y problemas para dormir. Si estos síntomas son frecuentes y afectan tu bienestar, es importante hablar con alguien de confianza o buscar ayuda profesional para manejarla adecuadamente.`,
  },
  {
    header: "Recomendaciones",
    image: image5,
    symbol: "recommend", 
    text: `De todas maneras, las recomendaciones siempre son que los jóvenes aprendan a identificar y expresar sus emociones de manera adecuada, así como a buscar apoyo emocional cuando lo necesite. Además, la comunicación asertiva, la escucha activa y la búsqueda de estrategias de afrontamiento positivas, así como el ejercicio físico y las técnicas de relajación, son clave para mantener una buena salud mental.
    `,
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
      <div className= "background"> 
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
      <EmojiChart/>
      </div>
      
    </>
  );
};

export default ImgAccordion;
