import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import EmailLink from '../.next/components/EmailLink'
import About from '';
import Skill from './skill';
import Slideshow from './Slideshow';
import router from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';
import { handleNavClick } from './utils'; 
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { Fragment } from 'react'
// Import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

<style jsx global>
  {`

@font-face {
  font-family: downfont; 
       url('../font/yummy dinner') format('opentype'),
        url('../font/yummy dinner') format('opentype'),
  /* Add more formats if needed, like eot, svg, etc. */
  font-weight: normal;
  font-style: normal;
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

animation: bounce 1s infinite;

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
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
.bg-beb3e5 {
  background-color: #beb3e5; /* Use the correct color code */
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

]}
imageClassName="object-cover w-full h-full"


  `}
</style>






const YourComponent: React.FC = () => {

  const handleNavClick = (link: string) => {
    const section = document.getElementById(link.substring(1)); // Removing '#' from link
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isPopOutVisible, setPopOutVisible] = useState(false);

  const handleImageClick = () => {
    setPopOutVisible(true);
  };

  const handlePopOutClose = () => {
    setPopOutVisible(false);
  };

  

  
  return (
    <div className="image-container">
      <img
        src="your-image-source.jpg"
        alt="Your Image"
        className="image-thumbnail"
        onClick={handleImageClick}
      />

      {isPopOutVisible && (
        <div className="image-pop-out" onClick={handlePopOutClose}>
          <img
            src="your-image-source.jpg"
            alt="Your Image"
            className="pop-out-image"
          />
        </div>
      )}
    </div>
  );
};


// Define the type for the navigation item
type NavItem = {
  title: string;
  link: string;
};
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },{
    value: 60,
    label: "60",
  },{
    value: 70,
    label: "70",
  },{
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },{
    value: 100,
    label: "100",
  },
];

function valuetext(value: number) {
  return `${value}`;
}




// Navigation bar component
// Update the Navbar component
const Navbar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} className="nav-item" style={{ marginRight: '20px' }}>
            <Link href={item.link || ''}>
              <a className={item.title === 'Home' ? styles.homeText : ''}>
                {item.title.replace("'", "&apos;")}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface navItems {
  title: string;
  link: string;
}

const Home: React.FC = () => {
  const navItems: NavItem[] = [
    { title: 'Home', link: '#home' },
    { title: 'Achivement', link: '#achievment' },
    { title: 'Hobby', link: '#hobby' },
    { title: 'Know More', link: '#contact' },
  ];
  return (
    <div>
          <div className="mx-auto mx-auto w-full">
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
          </Head>

  


    <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black justify-center items-center mx-auto lg:text-center">
  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden flex border-radius-40">
      <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
        <h1 className="font-['maintain'] text-[2.5rem] font-bold">Achievement</h1>
      </div>
    </div>
  </div>

  <div id="achievement" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden  border-radius-40">
      <div className="lg:flex">
      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[#F6F3E4] mx-auto rounded-lg p-12">
        <div className="flex items-center justify-center ">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./main3.gif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
        </div>
      </div>

      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className="flex items-center justify-center ">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./main3.gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
        </div>
      </div>
    
      </div>
    </div>
  </div>




  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
  </div>

  <div id="achievement" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden  border-radius-40">
      <div className="lg:flex">
      <div className={`${styles.floatchild} lg:w-1/3`}>
        <div className="bg-[#F6F3E4] mx-auto rounded-lg p-12">
        <div className="flex items-center justify-center ">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./main3.gif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
        </div>
      </div>

      <div className={`${styles.floatchild} lg:w-1/3`}>
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className="flex items-center justify-center ">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./main3.gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
      
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
        </div>
      </div>

      <div className={`${styles.floatchild} lg:w-1/3`}>
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className="flex items-center justify-center ">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./main3.gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
      
          </CardContent>
        </Card>
        </div>
        </div>
      </div>

      
    
      </div>
    </div>
  </div>

</div>













</div>





   

 

              <div id="contact" className="box-border bg-cover bg-center bg-no-repeat w-full">
            <div className="flex-1 text-center text-justify pl-8 pr-8 pt-3 font-[georgia] text-base text-black">
              <h1 className="font-['maintain'] text-[2.5rem] font-bold pb-8">Find Me On</h1>
              <div className={styles.iconContainer}>
              <a href="https://www.facebook.com/thiew.lengfong.5?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
               <Image src="/email.b.gif" alt="email" width="40" height="40" className={styles.icon} />
              </a>
              </div>
              <div className={styles.iconContainer}>
              <a href="https://www.facebook.com/thiew.lengfong.5?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
               <Image src="/facebook.a.png" alt="email" width="40" height="40" className={styles.icon} />
              </a>
          </div>
          <div className={styles.iconContainer}>
          <a href="https://www.instagram.com/leng_fong?igsh=Zmt4cWExYmJ2a3J2&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Image src="/insta.a.png" alt="email" width="40" height="40" className={styles.icon} />
          </a>
          </div>
          <div className={styles.iconContainer}>
          <a href="tel:+1234567890">
                <Image src="/phone.a.gif" alt="phone" width="40" height="40" className={styles.icon} />
          </a>
          </div>
        </div>
      </div>


        

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
        </div>
    

    
    
  )
}
export default Home