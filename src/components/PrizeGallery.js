import React from 'react';
import PrizeCard from './PrizeCard';
import prizes from '../components/data/prizes';

const PrizeGallery = () => {
  return (
    <div className="prize-gallery">
      {prizes.map(prize => (
        <PrizeCard key={prize.id} prize={prize} />
      ))}
    </div>
  );
};

export default PrizeGallery;
