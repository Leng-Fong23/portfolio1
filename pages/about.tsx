import React from 'react';
import styles from '../styles/Home.module.css'

const AboutPage: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>
            Achivement <br /> 
      </h2>
      <p>2022 to 2023	Recipient of the Jeffery Cheah continuing scholarship <br />
2021	Awarded Jeffery Cheah Scholarship (3.8 and above overall average in FIST) <br />
2020	Awarded Special Merit Scholarship (5As for SPM) <br />
2019	Placed third in Kelantan state under 17 years old basketball competition <br />
2017	Placed second in Kelantan state 3 on 3 basketball competition <br />
</p>
    </div>
  );
};

export default AboutPage;