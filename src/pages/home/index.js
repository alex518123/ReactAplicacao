import React from 'react'
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/video.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';

function Home(){
    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                        O hobbit Frodo Bolseiro recebe a missão de destruir o Um Anel, uma relíquia poderosa forjada 
                        pelo maligno Sauron para dominar a Terra-média. Ao lado de seus amigos e da Sociedade do Anel, 
                        Frodo enfrenta perigos mortais para chegar a Mordor, onde o Anel deve ser destruído.
                        </p>
                        <button className='button'>Comprar ingresso</button>
                    </div>
                </div>
            </div>
            
            <Cards />
            <Footer />
        </>
    )
}

export default Home;