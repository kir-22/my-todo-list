import React from 'react';
import style from './Main.module.css';

function Card(props) {
  return (
    <div className={style.cardsContainer}>
      {
        props.cards.map((card, index) => {
          return (
            <div key={index} className={style.card}>
              {card}
            </div>
          )
        })
      }
    </div>
  );
}

export default Card;
