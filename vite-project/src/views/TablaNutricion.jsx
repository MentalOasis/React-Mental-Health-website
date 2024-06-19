import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Consejos = () => {
    return (
        <Container className="py-5">
            <div className="text-center">
                <h1 className="mb-5">ALGUNOS CONSEJOS</h1>
            </div>

            <Row xs={1} md={3} className="g-4">
                {consejos.map((consejo, index) => (
                    <Col key={index}>
                        <Card className="h-100 shadow rounded-3" style={{ backgroundColor: '#f5f0e4' }}>
                            <Card.Img variant="top" src={consejo.imagen} className="card-img-top mx-auto d-block rounded-top" alt={`Consejo ${index + 1}`} />
                            <Card.Body>
                                <Card.Title className="fw-bold">{consejo.titulo}</Card.Title>
                                <Card.Text>{consejo.descripcion}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="text-center mt-5">
                <h2>GUÍA ALIMENTARIA DEL ADOLESCENTE</h2>
            </div>

            <div className="mt-5">
                <table className="table table-hover table-striped custom-table">
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
                        {guias.map((guia, index) => (
                            <tr key={index}>
                                <td>{guia.alimento}</td>
                                <td>{guia.aportan}</td>
                                <td>{guia.cantidad}</td>
                                <td>{guia.frecuencia}</td>
                                <td>
                                    <ul>
                                        {guia.porcion.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

const consejos = [
    {
        imagen: "/pic/perrito1.jpeg",
        titulo: "Visita a tu nutricionista",
        descripcion: "Recuerda que todos somos diferentes, por lo tanto visita a tu nutricionista para que te apoye con una pauta adaptada a tus necesidades."
    },
    {
        imagen: "/pic/perrito2.jpeg",
        titulo: "Apoyo psicológico",
        descripcion: "Recuerda apoyar tus procesos de cambios de hábitos con un psicólogo/a."
    },
    {
        imagen: "/pic/perrito3.jpeg",
        titulo: "Moderación en la alimentación",
        descripcion: "No sientas culpa por comer comida rápida de vez en cuando, también es sano y válido darse gustos."
    }
];

const guias = [
    {
        alimento: "Lácteos descremados",
        aportan: "Proteínas, calcio, vitaminas A y B",
        cantidad: "3 porciones",
        frecuencia: "Diarias",
        porcion: [
            "- 1 taza de leche descremada",
            "- 1 yogurt descremado",
            "- 1 rebanada de quesillo 3x3 cm",
            "- 1 lámina de queso mantecoso"
        ]
    },
    {
        alimento: "Pescado",
        aportan: "Proteínas, hierro, zinc y cobre",
        cantidad: "1 porción",
        frecuencia: "2 veces por semana",
        porcion: [
            "- 1 presa de pescado"
        ]
    },
    {
        alimento: "Legumbres",
        aportan: "Proteínas, hierro, zinc y cobre",
        cantidad: "1 porción",
        frecuencia: "2 veces por semana",
        porcion: [
            "- 1 taza de legumbres"
        ]
    },
    {
        alimento: "Carnes y huevo",
        aportan: "Proteínas, hierro, zinc y cobre",
        cantidad: "1 porción",
        frecuencia: "3 veces por semana",
        porcion: [
            "- 1 presa de pollo o pavo",
            "- 1 bistec pequeño a la plancha o asado (carne magra)",
            "- 1 huevo"
        ]
    },
    {
        alimento: "Verduras",
        aportan: "Antioxidantes, fibra dietética y vitaminas A y C",
        cantidad: "3 porciones",
        frecuencia: "Diaria",
        porcion: [
            "- 1 plato de lechuga, repollo, coliflor, apio o brócoli",
            "- 1 tomate tamaño regular",
            "- ½ taza de acelgas, espinacas, zanahorias, betarragas o zapallos"
        ]
    },
    {
        alimento: "Frutas",
        aportan: "Antioxidantes, fibra dietética y vitaminas A y C",
        cantidad: "2 porciones",
        frecuencia: "Diaria",
        porcion: [
            "- 1 manzana, naranja, pera o membrillo",
            "- 2 duraznos, kiwis o tuna",
            "- 2 damascos o ciruelas",
            "- 1 rebanada de melón",
            "- 1 taza de uvas o cerezas"
        ]
    },
    {
        alimento: "Cereales y papas",
        aportan: "Hidratos de carbono, fibra dietética y proteínas",
        cantidad: "2 porciones",
        frecuencia: "Diaria",
        porcion: [
            "- 1 taza de arroz, fideos o papas cocida",
            "- 1 taza de choclos, habas o arvejas"
        ]
    },
    {
        alimento: "Pan, galletas de agua o soda",
        aportan: "Hidratos de carbono, fibra dietética y proteínas",
        cantidad: "2 porciones",
        frecuencia: "Diaria",
        porcion: [
            "- ½ hallulla o marraqueta",
            "- 1 ½ rebanada de pan molde integral",
            "- 2 rebanadas de pan de molde blanco",
            "- 6 galletas de agua o soda"
        ]
    },
    {
        alimento: "Agua",
        aportan: "----------------------------------------",
        cantidad: "1,5 - 2 litros",
        frecuencia: "Diaria",
        porcion: [
            "- 6 - 8 vasos"
        ]
    }
];

export default Consejos;
