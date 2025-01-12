import React from 'react';
import './styles.css'; 

const Gallery = () => {
  const banners = [
    'fotos-banner1',
    'fotos-banner2',
    'fotos-banner3',
    'fotos-banner4',
    'fotos-banner5',
    'fotos-banner6',
    'fotos-banner7',
    'fotos-banner8',
    'fotos-banner9',
    'fotos-banner10',
    'fotos-banner11',
    'fotos-banner12',
  ];

  return (
    <div className="fotos-cards-container">
      <div className="fotos-cards-content">
        {banners.map((banner, index) => (
          <div key={index} className={`fotos-card ${banner}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
