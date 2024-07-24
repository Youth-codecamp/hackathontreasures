import React from 'react';

const PrizeCard = ({ prize }) => {
  return (
    <div className="prize-card">
      <img src={prize.image} alt={prize.name} />
      <h3>{prize.name}</h3>
      <p>In Stock: {prize.stock}</p>
    </div>
  );
};

export default PrizeCard;
