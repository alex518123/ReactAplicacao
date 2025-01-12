import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Footer from '../../components/footer/footer';
import Video2 from '../../assets/video2.mp4';
import Reviews from '../../components/reviews/reviews';

function Comentarios() {
  return (
    <>
        <Header />

        <div className="background-video">
          <video autoPlay loop muted>
            <source src={Video2} type="video/mp4" />
          </video>
        </div>

        <h1>COMENTÁRIOS</h1>

        <Reviews />
        <Footer />
    </>
  );
}

export default Comentarios;
