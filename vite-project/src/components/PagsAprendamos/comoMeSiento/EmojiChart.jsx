import React, { useState } from 'react';
import Img from './emotions/Img.jsx';
import './emoji.css';

const EmojiChart = () => {
  const [message, setMessage] = useState('Haz clic en un emoji para ver un mensaje');

  const handleEmojiClick = (emojiMessage) => {
    setMessage(emojiMessage);
  };

  const emojis = [
    { src: Img.image1, alt: 'Enojado', message: 'Entiendo que estés enojada y es válido sentirlo. A veces, el enojo surge cuando nos sentimos frustradas, ignoradas o injustamente tratadas. Respira profundamente y cuenta hasta diez. Luego, escribe o dibuja lo que sientes; puede ayudarte a liberar esa emoción."' },
    { src: Img.image2, alt: 'Feliz', message: '¡Qué alegría verte feliz! Disfruta este sentimiento plenamente. Respira profundamente y celebra cada momento. ¿Qué te hace sentir tan feliz? Escribe o dibuja tus pensamientos y experiencias. Compartir tu felicidad con los demás puede multiplicarla.' },
    { src: Img.image3, alt: 'Nervioso', message: 'Entiendo que te sientas nerviosa y es normal. La nerviosidad puede surgir ante nuevas situaciones o desafíos. Respira profundamente y recuerda que eres capaz. Visualiza el éxito y confía en ti misma. Hablar sobre tus nervios con alguien de confianza puede aliviarlos.' },
    { src: Img.image4, alt: 'Neutral', message: 'Estar en un estado neutral es parte natural de nuestras emociones. Si te sientes así, tómate un momento para reflexionar. ¿Qué te llevó a este estado? Respira profundamente y permítete sentir sin juzgarte. Aprovecha este momento para conocerte mejor.' },
    { src: Img.image5, alt: 'Triste', message: 'Entiendo que te sientas triste y es válido. La tristeza puede aparecer por diversas razones. Permítete sentir y busca actividades que te reconforten, como dar un paseo o hablar con un amigo. Recuerda que no estás sola y que las cosas mejorarán con el tiempo.' },
    { src: Img.image14, alt: 'Estresado', message: ' Entiendo que te sientas estresada y es comprensible. El estrés puede surgir por diversas responsabilidades y presiones. Respira profundamente y tómate un momento para relajarte. Prioriza tus tareas y pide ayuda si es necesario. Recuerda que cuidar de ti misma es primordial.' },
    { src: Img.image8, alt: 'Emocionado', message: ' ¡Qué emoción! A veces, sentirse emocionada puede abrumarnos. Respira profundamente para disfrutarla plenamente. ¿Qué te hace sentir así? Escribe o dibuja tus pensamientos y emociones. Compartir tu emoción con alguien cercano puede hacerla aún más especial.' },
    { src: Img.image11, alt: 'Amado', message: '¡Qué hermoso es sentirse amada! Disfruta y celebra este sentimiento tan especial. Respira profundamente y deja que el amor te llene por completo. ¿Quiénes te hacen sentir tan amada? Escribe o dibuja tus pensamientos y emociones para recordar este momento especial.' },
    { src: Img.image13, alt: 'Enfermo', message: 'Entiendo que te sientas enferma y es difícil. La enfermedad puede hacernos sentir vulnerables y preocupadas. Descansa lo necesario y cuida de ti misma. No dudes en buscar ayuda médica si es necesario. Recuerda que tu bienestar es lo más importante.' },
    { src: Img.image15, alt: 'Sorprendido', message: '¡Qué sorpresa! Disfruta este momento inesperado al máximo. Respira profundamente y permítete sentir la emoción en su totalidad. ¿Qué te causó tanta sorpresa? Escribe o dibuja tus pensamientos y emociones para recordar este momento especial.' },
    { src: Img.image9, alt: 'Frustrado', message: 'Entiendo tu frustración, a veces las cosas no salen como esperamos. Respira profundamente y tómate un momento para calmarte. Luego, busca soluciones prácticas y enfoca tu energía en lo que puedes cambiar. Recuerda que pedir ayuda es valioso.' },
    { src: Img.image12, alt: 'Asustado', message: 'Entiendo que te sientas asustada y es normal. El miedo puede aparecer ante situaciones desconocidas o amenazantes. Respira profundamente y recuerda que puedes enfrentarlo. Busca apoyo en tus seres queridos y recuerda que estoy aquí para ayudarte.' },
    { src: Img.image16, alt: 'Cansado', message: 'Entiendo que te sientas cansada y es normal. El cansancio puede aparecer por diversas razones, como falta de descanso o estrés. Tómate un tiempo para descansar y cuidar de ti misma. Recuerda que tu bienestar es lo más importante.' },
    { src: Img.image10, alt: 'Solitario', message: ' Entiendo que te sientas sola y es válido. La soledad puede aparecer incluso estando rodeada de personas. Permítete sentir y busca actividades que te reconforten, como leer un libro o escuchar música. Recuerda que siempre estoy aquí para ti.' },
    { src: Img.image7, alt: 'Avergonzado', message: 'Entiendo que te sientas avergonzada y es normal. La vergüenza puede surgir por situaciones incómodas o errores. Permítete sentir, luego reflexiona sobre lo ocurrido. Respira profundamente y cuenta hasta diez. Si es necesario, habla con alguien de confianza.' },
    { src: Img.image6, alt: 'Molesto', message: ' Entiendo que estés molesta y es válido sentirlo. A veces, la molestia surge cuando nos sentimos frustradas, ignoradas o injustamente tratadas. Respira profundamente y cuenta hasta diez. Luego, escribe o dibuja lo que sientes; puede ayudarte a liberar esa emoción.' },
  ];

  return (
    <div className="emoji-container">
        <div className="title-container">
          <h3>Tabla de Emociones</h3>
          <h4>Usa esta tabla de emociones para entender y expresar cómo te sientes! </h4>
        </div>
      <div className="emoji-grid">
        {emojis.map((emoji, index) => (
          <div key={index} className="emoji-item">
            <small>{emoji.alt}</small>
            <img
              src={emoji.src}
              alt={emoji.alt}
              onClick={() => handleEmojiClick(emoji.message)}
              className="emoji"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-3 message card">{message}</div>
    </div>
  );
};

export default EmojiChart;
