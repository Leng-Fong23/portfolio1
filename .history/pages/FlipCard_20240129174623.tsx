import React from 'react';
import styles from '../styles/Home.module.css' // Import your stylesheet if you have one

const CardFlip = () => {
  return (
      
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <img src="image.jpeg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
          </div>
          <div className={styles.flipcardback}>
          <img src="bp.jpeg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
          </div>
        </div>
      
  );
};

export default CardFlip;
