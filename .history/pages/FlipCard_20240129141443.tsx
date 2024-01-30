// FlipCard.tsx

import React, { useState } from 'react';
import '../styles/';

interface FlipCardProps {
  children: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{children}</div>
        <div className="flip-card-back">{children}</div>
      </div>
    </div>
  );
};

export default FlipCard;
