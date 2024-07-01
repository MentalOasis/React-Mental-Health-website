import React from 'react';

const Consejos = () => {
    return (
        <div  style={{ marginRight: '50px' , marginLeft: '50px', marginTop: '60px'}}>
            <h1 className="text-center">ALGUNOS CONSEJOS</h1>
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="/pic/perrito1.jpeg" className="card-img-top card-img mx-auto d-block" style={{ padding: '60px'}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Recuerda que todos somos diferentes, por lo tanto visita a tu nutricionista para que te apoye con una pauta adaptada a tus necesidades.</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/pic/perrito2.jpeg" className="card-img-top card-img mx-auto d-block" style={{ padding: '60px', paddingTop: "30px", paddingBottom: "30px"}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Recuerda apoyar tus procesos de cambios de hábitos con un psicologo/a.</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/pic/perrito.jpeg" className="card-img-top card-img mx-auto d-block" style={{ padding: '60px', paddingBottom: "40px"}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">No sientas culpa por comer comida rápida de vez en cuando, también es sano y válido darse gustos.</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------- */}
            <h2 className="text-center" style={{ marginTop: '60px'}} >GUIA ALIMENTARIA DEL ADOLESCENTE</h2>
            <br />
            <table className="table" style={{ marginRight: '20px' , marginLeft: '20px', marginBottom: '80px'}}>
                <thead>
                    <tr>
                        <th>Alimentos</th>
                        <th>Aportan</th>
                        <th>Cantidad</th>
                        <th>Frecuencia</th>
                        <th>1 Porción es igual a:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lácteos descremados</td>
                        <td>Proteínas, calcio, vitaminas A y B</td>
                        <td>3 porciones</td>
                        <td>Diarias</td>
                        <td>
                            <ul>
                                <li>-1 taza de leche descremada</li>
                                <li>-1 yogurt descremados</li>
                                <li>-1 rebanada de quesillo 3x3 cm</li>
                                <li>-1 lámina de queso mantecoso</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Pescado</td>
                        <td>Proteínas, hierro, zinc y cobre</td>
                        <td>1 porción</td>
                        <td>2 veces por semana</td>
                        <td>
                            <ul>
                                <li>1 presa de pescado</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Legumbres</td>
                        <td>Proteínas, hierro, zinc y cobre</td>
                        <td>1 porción</td>
                        <td>2 veces por semana</td>
                        <td>
                            <ul>
                                <li>1 taza de legumbres</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Carnes y huevo</td>
                        <td>Proteínas, hierro, zinc y cobre</td>
                        <td>1 porción</td>
                        <td>3 veces por semana</td>
                        <td>
                            <ul>
                                <li>-1 presa de pollo o pavo</li>
                                <li>-1 bistec pequeño a la plancha o asado (carne magra)</li>
                                <li>-1 huevo</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Verduras</td>
                        <td>Antioxidantes, fibra dietética y vitaminas A y C</td>
                        <td>3 porciones</td>
                        <td>Diaria</td>
                        <td>
                            <ul>
                                <li>-1 plato de lechuga, repollo, coliflor, apio o brócoli</li>
                                <li>-1 tomate tamaño regular</li>
                                <li>-½ taza de acelgas, espinacas, zanahorias, betarragas o zapallos</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Frutas</td>
                        <td>Antioxidantes, fibra dietética y vitaminas A y C</td>
                        <td>2 porciones</td>
                        <td>Diaria</td>
                        <td>
                            <ul>
                                <li>-1 manzana, naranja, pera o membrillo</li>
                                <li>-2 duraznos, kiwis o tuna</li>
                                <li>-2 damascos o ciruelas</li>
                                <li>-1 rebanada de melón</li>
                                <li>-1 taza de uvas o cerezas</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Cereales y papas</td>
                        <td>Hidratos de carbono, fibra dietética y proteínas</td>
                        <td>2 porciones</td>
                        <td>Diaria</td>
                        <td>
                            <ul>
                                <li>-1 taza de arroz, fideos o papas cocida</li>
                                <li>-1 taza de choclos, habas o arvejas</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Pan, galletas de agua o soda</td>
                        <td>Hidratos de carbono, fibra dietética y proteínas</td>
                        <td>2 porciones</td>
                        <td>Diaria</td>
                        <td>
                            <ul>
                                <li>-½ hallulla o marraqueta</li>
                                <li>-1 ½ rebanada de pan molde integral</li>
                                <li>-2 rebanadas de pan de molde blanco</li>
                                <li>-6 galletas de agua o soda</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Agua</td>
                        <td>----------------------------------------</td>
                        <td>1,5 - 2 litros</td>
                        <td>Diaria</td>
                        <td>
                            <ul>
                                <li>6 - 8 vasos</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Consejos