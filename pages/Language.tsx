import React from 'react';
import styles from '../styles/Home.module.css'

const AboutPage: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>
            Languages <br /> 
      </h2>
      <p>• Fluent in speaking Mandarin, English, Malay, Hokkien and understand Cantonese.<br />
•	Fluent in writing Mandarin, English, and Malay.

</p>
    </div>
  );
};

export default AboutPage;