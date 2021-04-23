import React from 'react';
import '../card/card.styles.css';

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="cat"
        src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}
      ></img>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
export default Card;
