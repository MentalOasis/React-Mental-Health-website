
import { useState } from "react";
import "../comoMeSiento/stylesAccordion.css";
import "./accordion.css";
import Int from './inteligencias/Int.jsx';




const items = [
  {
    header: "Inteligencia Lógico Matemática",
    image: Int.image6,
    symbol : "calculate",
    text: `Aquellos que gustan de los números y las ciencias exactas tienen este tipo de inteligencia. 
    ¿Cómo puedes desarrollarla? Crea esquemas y 
    disfruta de juegos de lógica y códigos.
    

    `,
  },
  {
    header: "Inteligencia Musical",
    image: Int.image7,
    symbol: "artist",
    text: `Las personas demuestran gran interés por los instrumentos musicales, el baile y la música.
    ¿Cómo puedes desarrollarla? 
    Tomando clases o practicando un instrumento.
    
    `,
  },
  {
    header: "Inteligencia Visoespacial",
    image: Int.image14,
    symbol: "brush", 
    text: `
    Se muestra gran interés por las fotografías, la construcción de objetos y los dibujos. 
¿Cómo puedes desarrollarla? Visita museos, 
juega con puzzles y crea mapas conceptuales.

    `,
  },
  {
    header: "Inteligencia Verbal Lingüística   ",
    image: Int.image12,
    symbol: "auto_stories",
    text: `Estas personas disfrutan mucho de los libros y la escritura. 
    ¿Cómo puedes desarrollarla? Puedes aprender un idioma, y leer sobre 
    los temas que más te gusten.
    `,
  },
  {
    header: "Tipos de inteligencia ",
    image: Int.image3,
    symbol: "home", 
    text: `A lo largo de la historia, se han propuesto diversas clasificaciones sobre la inteligencia. En la actualidad, una teoría destacada es la de Howard Gardner, que postula que la inteligencia no se limita a características específicas, sino que consiste en una variedad de habilidades interrelacionadas. 
    Según esta teoría, todas las personas poseen diferentes tipos de inteligencia y en diversas medidas, influenciadas por factores biológicos, personales y culturales. 
    Gardner identifica ocho tipos de inteligencia, por lo que cada individuo puede destacar en diferentes áreas, lo que contribuye a su singularidad. Esta teoría ha impactado de gran manera la educación, fomentando un enfoque más diverso y amplio, reconociendo y valorando las diferencias individuales.
    
    `,
  },
  {
    header: "Inteligencia Corporal Kinestésica   ",
    image: Int.image1,
    symbol: "sports_basketball",
    text: `Las personas con este tipo de inteligencia muestran mucho interés por las actividades físicas y los deportes. ¿Cómo puedes desarrollarla? Participa en juegos de mímicas y clases 
    de arte y teatro.
    
    `,
  },
  {
    header: "Inteligencia Naturalista",
    image: Int.image11,
    symbol: "deceased",
    text: `Estas personas sienten gran interés por la naturaleza, los animales y la vegetación en general. 
    ¿Cómo puedes desarrollarla? Pasa tiempo al aire libre y participa en actividades de excursión.
    `,
  },
  {
    header: "Inteligencia Interpersonal ",
    image: Int.image4,
    symbol: "handshake",
    text: `Este grupo de personas gusta mucho de tener amigos, entablar conversaciones con otros y participar de diferentes clubes y equipos. 
    ¿Cómo puedes desarrollarla? Sé parte de debates y juegos multijugador.
    
    `,
  },
  {
    header: "Inteligencia Intrapersonal  ",
    image: Int.image2,
    symbol: "sentiment_very_satisfied",
    text: `Poseen esta inteligencia aquellas personas que se caracterizan por reflexionar sobre sus emociones y que desafían su zona de confort. 
    ¿Cómo puedes desarrollarla? Puedes participar en charlas de habilidades blandas y ser parte de juegos que promuevan la reflexión y la perspectiva.
    
    `,
  },
];

export const ImgAccordion = () => {
  const [active, setActive] = useState(4); //parte desde la 5

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <div
        className="image-accordion-background-int"
        style={{ backgroundImage: `url(${items[active].image})` }}
      ></div>
      
        <div className="title-container-int">
          <h1>Tipos de inteligencia y la importancia de cada uno en la sociedad</h1>
        </div>
        <div className="image-accordion-int">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`image-accordion-item-int  ${isActive}`}
              onClick={() => handleToggle(index)}
            >
             
              <img src={item.image} />
              
              {active !== index && (
                  <span className="image-accordion-item-int material-symbols-outlined">{item.symbol}</span>
                )}
                
            
              <div className="content">
              
              
                <div className="efecto-vidrio-int">
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
     
      
      
    </>
  );
};

export default ImgAccordion;
