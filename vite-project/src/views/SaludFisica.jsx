import React from 'react';
import './SaludFisica.css'; // Importa el archivo CSS para los estilos

const ConsejosVidaSana = () => {
    return (
        <div className="row">
            <div className="card card-salud">
                <div className="face front">
                    <img src="/pic/Designer (43).jpeg" alt="" width="300" />
                    <h3>ALGUNOS CONSEJOS DE VIDA SANA</h3>
                </div>
                <div className="face back">
                    <h3 className="card-title">GUIAS ALIMENTARIAS PARA LA POBLACION CHILENA</h3>
                    <p className="card-text">
                        <br />
                        1. Para tener un peso saludable, come sano y realiza actividad física diariamente.
                        <br /><br />
                        2. Pasa menos tiempo frente al computador o la tele y camina a paso rápido, mínimo 30 minutos al día.
                        <br /><br />
                        3. Come alimentos con poca sal y saca el salero de la mesa.
                        <br /><br />
                        4. Si quieres tener un peso saludable, evita el azúcar, dulces, bebidas y jugos azucarados.
                        <br /><br />
                        5. Cuida tu corazón evitando las frituras y alimentos con grasas como cecinas y mayonesa.
                        <br /><br />
                        6. Come 5 veces verduras y frutas frescas de distintos colores, cada día.
                        <br /><br />
                        7. Para fortalecer tus huesos, consume 3 veces al día lácteos bajos en grasa y azúcar.
                        <br /><br />
                        8. Para mantener sano tu corazón, come pescado al horno o a la plancha, 2 veces por semana.
                        <br /><br />
                        9. Consume legumbres al menos dos veces por semana, sin mezclarlas con cecinas.
                        <br /><br />
                        10. Para mantenerte hidratado, toma 6 a 8 vasos de agua al día.
                        <br /><br />
                        11. Lee y compara las etiquetas de los alimentos y prefiere los que tengan menos grasas, azúcar y sal (sodio).
                    </p>
                </div>
            </div>
            <div className="card card-salud narrower"> {/* Agrega la clase "narrower" al segundo card */}
                <div className="face front">
                    <img src="/pic/Designer (58).jpeg" alt="" width="300" />
                    <h3>ACTIVIDAD FÍSICA</h3>
                </div>
                <div className="face back">
                    <h6 className="card-title">
                        <p className="card-text">
                            Los adolescentes deben acumular al menos 60 minutos de actividad física de intensidad moderada a vigorosa diariamente.
                            <br /><br />
                            • La actividad física mayor a 60 minutos diarios proporciona beneficios adicionales para la salud.
                            <br /><br />
                            • La mayor parte de la actividad física diaria debe ser aeróbica. Se deben incorporar actividades de intensidad vigorosa, incluidas aquellas que fortalezcan el músculo y el hueso, al menos 3 veces por semana.
                        </p>
                        <img src="/pic/perrito.jpeg" width="150" />
                        <p>Recuerda comer fruta e hidratarte después de hacer actividad física.</p>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default ConsejosVidaSana;
