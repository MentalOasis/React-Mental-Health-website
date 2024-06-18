
import React from 'react';
import Card1 from '../components/PagNavFooter/aprendamos/Card1';
import Card2 from '../components/PagNavFooter/aprendamos/Card2';
import Card3 from '../components/PagNavFooter/aprendamos/Card3';
import Card4 from '../components/PagNavFooter/aprendamos/Card4';
import Card5 from '../components/PagNavFooter/aprendamos/Card5';
import MusicPlayer from '../components/PagNavFooter/aprendamos/MusicPlayer';
import Carousel from '../components/PagNavFooter/aprendamos/CarouselAprendamos';
import TituloBloque from '../components/PagNavFooter/aprendamos/TituloBloque';
import "../components/PagNavFooter/aprendamos/aprendamos.css"


const Aprendamos = () => {
    return(
        <>

            <div >
                <TituloBloque/>
                <div className="margen-pagina">
                <Card1 />

                    <div className="container-cardAP">
                        <div className="left-column">
                            <Card2 />
                            <Card3 />
                        </div>
                        <div className="right-column">
                            <MusicPlayer />
                        </div>
                    </div>

                <div className="row">
                    <Card4 />
                    <Card5/>
                </div>
                <Carousel />
                </div>
            </div>
    
        </>
    )
}

export default Aprendamos

