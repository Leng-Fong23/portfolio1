import React from 'react';
import styles from '../styles/Home.module.css' // Import your stylesheet if you have one

const CardFlip = () => {
  return (
    <div>
      <h1>Card Flip with Text</h1>
      <h3>Hover over the image below:</h3>

      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className="flip-card-front">
            <img src="image.jpeg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
