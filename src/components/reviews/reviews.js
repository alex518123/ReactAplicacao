import React from 'react';
import './styles.css';

const reviewsData = [
  {
    id: 1,
    userImage: 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/12/jovem-nerd-950x570.jpg',
    userName: 'Jovem Nerd',
    reviewText: `A trilogia O Senhor dos Anéis é mais que uma obra cinematográfica; é uma epopeia que elevou a fantasia 
    ao patamar da excelência. Com a direção visionária de Peter Jackson, o elenco impecável e efeitos visuais 
    revolucionários, ela conquistou 17 Oscars, incluindo Melhor Filme para O Retorno do Rei. 
    A trilha sonora de Howard Shore ecoa como um feitiço que ainda encanta gerações, 
    enquanto as paisagens da Nova Zelândia se tornaram o próprio condado da imaginação. 
    É uma jornada épica que transcende o cinema e celebra a coragem, a amizade e o poder das histórias bem contadas.`,
    stars: 5,
  },
  {
    id: 2,
    userImage: 'https://lh3.googleusercontent.com/5MzNfoBBaUCu7CxJZ01-4girwqHThbmc5FAzZvgv4lN5nOw2Cwo1HY_Tbq_vu9VB3POuHkhSZJprySVFVvzTZb8m-hi0ZtSAiZjsqkqimTgzrIK1htVVqpCU4oqoDjS_G9jTkbX2',
    userName: 'Adoro Cinema',
    reviewText: `História excelente e muito bem feita, elenco muito bom e não acho nem um pouco cansativo mesmo 
    tendo muito tempo de filme. Filme adorável. Vale muito a pena assistir a todos os 3 filmes do 
    senhor dos anéis. Filme épico e um dos melhores de todos os tempos.`,
    stars: 5,
  },
  {
    id: 3,
    userImage: 'https://www.meioemensagem.com.br/wp-content/uploads/2016/04/omelete-logo-coluna.jpg',
    userName: 'Omelete',
    reviewText: `Além dos cenários e figurino perfeitos, o que mais se destaca é a trilha sonora. 
    Não apenas as músicas que remetem ao clima da Terra-média e ajudam a criar o ambiente 
    de tensão e batalhas, mas os sons criados para as aparições dos Cavaleiros Negros e, 
    o que mais chamou atenção, a forma como é mostrada a visão de Frodo quando ele usa o Um Anel.`,
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <section className="cards2">
      {reviewsData.map(({ id, userImage, userName, reviewText, stars }) => (
        <div key={id} className="comment-card">
          <img className="user" src={userImage} alt={userName} />
          <h3>{userName}</h3>
          <div className="star">
            {[...Array(stars)].map((_, i) => (
              <img
                key={i}
                className="stars"
                src="https://cdn-icons-png.flaticon.com/512/148/148841.png"
                alt="Star"
              />
            ))}
          </div>
          <p>{reviewText}</p>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
