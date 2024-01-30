import React from 'react';
import styles from '../styles/Home.module.css'

<style jsx global>
  {`

@font-face{
  font-family:Maintain;
  src: url("/font/Maintain.otf")
  format("openType");
} 

@font-face{
  font-family:Overlay;
  src: url("/font/Overlay.otf")
  format("openType");
} 

@font-face{
  font-family:Yummy-Dinner;
  src: url("/font/Yummy\ Dinner.otf")
  format("openType");
} 

.font-maintain {
  font-family: Maintain;
}
.font-overlay {
  font-family: Overlay;
}
.font-yummy-dinner {
  font-family: Yummy-Dinner;
}

.container {
  background-color: white;
}

.p{
  font-size: 18px;
  padding: 10px;
}

.gradient {
  width: 100%;
  height: 60vh;
  top: 100%;
  background: linear-gradient(45deg, #eff7f6, #f2b5d4);
  background-size: 300% 300%; /* Increase size for animation */
  animation: gradientAnimation 10s ease infinite; /* Apply animation */
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%; /* Initial position */
  }
  50% {
    background-position: 100% 59%; /* Move to the right */
  }
  100% {
    background-position: 0% 50%; /* Reset to initial position */
  }
}

/* The actual timeline (the vertical ruler) */

.content {
  padding: 20px 100px;
  background-color: #ffdfea;
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
}

.contenta {
  padding: 20px 100px;
  background-color: #F6F3E4;
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
}


.main {
  min-height: 100vh;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box {
  background: #F6F3E4;
  left: 0;
  position:relative;
  padding: 10px;
  align-items: center;
  justify-content: center;
}

.boxa {
  background: #ffdfea;
  width: 100%;
  height: auto;
  left: 0;
  position:relative;
  padding: 10px;
  align-items: center;
  justify-content: center;
}

.h1{
  font-family: Georgia;
  font-size: 22px ;
  font-weight: bold;
}

.text{
  flex: 1;
  text-align: center;
  text-align: justify;
  padding-left:200px;
  padding-right:200px;
  padding-top: 3%;
  font-family: Georgia;
  font-size: 16px ;
  color: black;
}

.topic{
  font-style:italic;
  font-family: Georgia;
  font-size: 16px ;
}

.year{
  font-family: Georgia;
  font-size: 20px ;
  font-weight:bold;
}

.imageandtext {
  display: flex; /* Use flexbox */
  align-items: center; /* Align items vertically */
}

/* In your styles.module.css or external CSS file */
.navbar {
  position:absolute;
  width:100%;
  overflow:auto;
  display: flex;
  background-color: #F6F3E4; /* Change this color as desired */
  color:black;
  padding: 10px;
  left: 0;
  justify-content: center;
  overflow: hidden;
  z-index: 1000;
}

.navbar:hover {
  background-color: #3498db;
}

.nav-item {
  margin-right: 20px;
  margin-left:20px;
  list-style: none;
  display: block;
  justify-content: center;
}

.nav-item li {
  padding: 10px;
  cursor: pointer;
  /* Default color for navigation items */
  color: #333;
  transition: color 0.3s ease; /* Smooth transition for color change */
}

/* Apply styles when hovering over the li elements */
.nav-item li:hover {
  color: #3498db; /* Color when hovered */
}

.link {
  text-decoration: none;
  color: white; /* Text color */
}

.link:hover {
  color: yellow; /* Text color on hover */
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9; /* Dropdown background color */
  min-width: 120px;
  z-index: 1;
}

.dropdown-content a {
  color: black; /* Dropdown item text color */
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1; /* Dropdown item background color on hover */
}


.img{
  transition: transform 0.3s ease;
  transform: scale(1.1);
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  padding-top: 3%;
}

.imga{
  max-width: 100%; /* Adjust the image size */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.one-line-spacing {
  line-height: 1.5; 
  margin-left: 10px;
}


.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
   
  flex-grow: 1;
}

.title a {
  color: #000000;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin-bottom: 20px;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
  color: #000000;
  border-color: #000000;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  .card,
  .footer {
    border-color: #222;
  }
  .code {
    background: #111;
  }
  .logo img {
    filter: invert(1);
  }
}

  `}
</style>

const AboutPage: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>
            Achivement <br /> 
      </h2>
      <div className={styles.ul}>
      <div className={styles.li} > 2022 to 2023	Recipient of the Jeffery Cheah continuing scholarship</div>
      </div>
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