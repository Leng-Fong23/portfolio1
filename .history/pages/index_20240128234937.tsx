import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
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

import Rating from '@mui/material/Rating';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import * as ReactDOM from "react-dom/client";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Demo from './Demo';
import { Progress } from 'flowbite-react';

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

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  

  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

   return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



  
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

const App = () => {
  const [percent, setPercent] = React.useState(30);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? 'success' : null;
  const color = percent === 100 ? '#52c41a' : '#3385ff';
}



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
          <div className="  mx-auto">
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
          </Head>

          <nav className=" w-full flex bg-white text-black p-4 justify-center z-50 left-0">
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
              {navItems.map((item, index) => (
                <li key={index} className="nav-item" style={{ marginRight: '20px' }}>
                  <a
                    onClick={() => handleNavClick(item.link || '')}
                    // Apply a different style to each title
                    className={
                      item.title === 'Home'
                        ? styles.homeText
                        : item.title === 'Achivement'
                        ? styles.skillText
                        : item.title === 'Hobby'
                        ? styles.achivementText
                        : item.title === 'Know More'
                        ? styles.contactText
                        : ''
                    }
                  >
                    {item.title.replace("'", "&apos;")}
                  </a>
                </li>
              ))}
            </ul>
          </nav> 

          <div className="min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center " style={{ backgroundImage: 'url("/Confetti.jpeg")' }}>
  <div className="relative mx-auto" style={{ top: '-1.5rem', textAlign: 'center' }}>
    <Image src="/profile.png" alt="lengfong" width="300" height="300" className="pt-20 mx-auto" />
    <h1 className="font-[Georgia] text-[2rem] font-bold p-4">Leng Fong</h1>
    <p className="font-[Georgia] text-[1rem] font-bold p-2">Major in Cyber Security and Networking</p>
    
    
      <div className="inline-block p-4 rounded-full w-70"> {/* Increase the width to 56 */}
        <Link href="./feedback" target="_blank" rel="noopener noreferrer">
          <div className={styles.btngrad}>
            <div className="rounded-full p-2 font-[georgia] text-[0.7rem] font-bold w-70">Hire Me
            </div>
          </div>
        </Link>
      </div>
    
    <a href="https://drive.google.com/file/d/1GFbDEpIVxzbKQ3M6xlCxya20VVmTU_74/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <div className="bg-beb3e5 rounded-full font-[georgia] text-60 font-bold w-90">
        Scroll down
        <div className="flex items-center justify-center">
          <Image src="/mouse-cursor.png" alt="email" width="100" height="100" className="fi fi-rr-arrow-right rounded-full p-0.5 text-sm w-10" />
        </div>
      </div>
    </a>
    
  </div>

  
   
</div>

<div className="flex-1 text-center sm:text-left lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black items-center">
  <div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-[Georgia] text-[2.5rem] font-bold">About Me</div>
  <div className="flex flex-col sm:flex-row lg:flex-row">
    <div className="w-full sm:w-1/2 lg:w-1/3">
      <div className="customtableth ">
        <Image src="/profile.png" alt="lengfong" width={300} height={200} className="float-right p-2 m-10" />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row lg:p-4 bg-[#EEEDEB] w-[60%] rounded-lg m-10 p-10">
      {/* Left side */}
      <div className="lg:w-2/3 lg:p-10">
        <div className="text-black text-left text-sm md:text-base lg:text-lg xl:text-xl">
          Hi, <a className="underline decoration-sky-500/30">I am Leng Fong.</a> I was born in Kelantan in the year of 2002. I am currently in my final year at Sunway University, majoring in <a className="underline decoration-sky-500/30">Information Technology (Computer Networking and Security).</a>
        </div>
        <div className="justify-center">
      <div className="inline-block p-1 rounded-full w-70"> {/* Increase the width to 56 */}
      <a href="https://drive.google.com/file/d/1GFbDEpIVxzbKQ3M6xlCxya20VVmTU_74/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <div className={styles.btngrad}>
            <div className="rounded-full p-2 font-[georgia] text-[0.7rem] font-bold w-70">Resume.pdf
              <div className="flex items-center justify-center">
              <Image src="/pdf.png" alt="email" width="20" height="5" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
        <div className="flex flex-col gap-2">
          <div className="text-black font-bold text-[1.5rem] text-left text-sm md:text-base lg:text-lg xl:text-xl p-2">
            {/* Content on the left side */}
          </div>
        </div>
      </div>

      {/* Right side */}
      
      <div className="lg:w-1/3 mx-auto text-center align-center pl-10 pt-2">
      <div className="inline-block bg-beb3e5 rounded-full  font-[Georgia] text-[1.5rem] font-bold">Skill</div>
  <div className="text-black p-2 text-left text-sm md:text-base lg:text-lg xl:text-xl">
    Oses
  </div>
  <div className="relative w-full md:w-48 h-4 bg-gray-300 rounded-full overflow-hidden">
    <div
      className="h-full bg-[#3A6AF2]"
      style={{ width: '80%' }} // Set your desired percentage
    ></div>
    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
      80%
    </span>
  </div>

  {/* Repeat the following blocks for other sections */}
  {/* Example Section */}
  <div className="text-black p-2 text-left text-sm md:text-base lg:text-lg xl:text-xl">
    Java
  </div>
  <div className="relative w-full md:w-48 h-4 bg-gray-300 rounded-full overflow-hidden">
    <div
      className="h-full bg-[#F27999]"
      style={{ width: '40%' }} // Set your desired percentage
    ></div>
    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
      40%
    </span>
  </div>

  <div className="text-black p-2 text-left text-sm md:text-base lg:text-lg xl:text-xl">
    Python
  </div>
  <div className="relative w-full md:w-48 h-4 bg-gray-300 rounded-full overflow-hidden">
    <div
      className="h-full bg-[#30D9A9]"
      style={{ width: '30%' }} // Set your desired percentage
    ></div>
    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
      30%
    </span>
  </div>

  <div className="text-black p-2 text-left text-sm md:text-base lg:text-lg xl:text-xl">
    Traffic Analysis
  </div>
  <div className="relative w-full md:w-48 h-4 bg-gray-300 rounded-full overflow-hidden">
    <div
      className="h-full bg-[#FFBE25]"
      style={{ width: '60%' }} // Set your desired percentage
    ></div>
    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
      60%
    </span>
  </div>

  {/* Add more sections as needed */}
</div>

    </div>
  </div>
</div>

<div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-[Georgia] text-[2.5rem] font-bold pl-10">Project</div>
<div className="grid place-items-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
    <div className="rounded-lg w-40 sm:w-36 md:w-40 lg:w-48 xl:w-48 h-50 sm:h-36 md:h-50 lg:h-48 xl:h-48 bg-[#3A6AF2] flex items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
      Red Red Red Red Red Red Red To make the container responsive, you can use responsive width and height classes along with media queries in Tailwind CSS. 
    </div>
    <div className="rounded-lg w-40 sm:w-36 md:w-40 lg:w-48 xl:w-48 h-50 sm:h-36 md:h-50 lg:h-48 xl:h-48 bg-[#FFBE25] flex items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
      Green To make the container responsive, you can use responsive width and height classes along with media queries in Tailwind CSS. 
    </div>
    <div className="rounded-lg w-40 sm:w-36 md:w-40 lg:w-48 xl:w-48 h-50 sm:h-36 md:h-50 lg:h-48 xl:h-48 bg-[#F27999] flex items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
      Blue To make the container responsive, you can use responsive width and height classes along with media queries in Tailwind CSS. 
    </div>
  </div>
</div>








    <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black justify-center items-center mx-auto lg:text-center">
  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden flex border-radius-40">
      <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
        <h1 className="font-['Georgia'] text-[2.5rem] font-bold">Achievement</h1>
      </div>
    </div>
  </div>

  <div id="achievement" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden  border-radius-40">
      <div className="lg:flex">
      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Image src="/book.png" alt="Book" width="75" height='75'/>
        </div>
        <h2 className="font-['georgia'] text-1.6rem font-bold">Education</h2>
                <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2021-2024
            {'\n'}
            </p>
            </div>
          </div> 

            <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp;Recipient of the Jeffery Cheah continuing scholarship <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2021 <br />
            </p>
             </div>
          </div> 

           <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp; Awareded of the Jeffery Cheah scholarship <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/scholar.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2020 <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp; &nbsp; Awarded Special Merit Scholarship <br />
            </p>
             </div>
          </div>

        </div>
      </div>
      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className={styles.iconContainera}>
        <Image src="/sport.png" alt="Book" width="75" height='75' className={styles.icon}/>
        </div>
        <h2 className="font-['georgia'] text-1.6rem font-bold">Sport</h2>
        <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/gold medal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2019 <br />
            </p>
             </div>
          </div> 

           <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp; Champion on District Competition <br />
            </p>
             </div>
          </div>  

  
        <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/slivermedal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2019 <br />
            </p>
             </div>
          </div> 

           <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp;First runner up on Basketball Competition U17 <br />
            </p>
             </div>
          </div>  

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <img src="/slivermedal.png" alt="Bullet Point"  width="30" height='30'/>
            <p className="topica text-1.2rem pl-8 italic font-georgia block">
            2018 <br />
            </p>
             </div>
          </div>

          <div className="list-none p-0 items-center">
            <div className={styles.li}>
            <p className="text-base pl-2 block italic font-[georgia]">
            &nbsp;&nbsp;&nbsp;&nbsp;First runner up on Basketball Competition U17 <br />
            </p>
             </div>
          </div>  
        </div>
    </div>
      </div>
    </div>
  </div>
</div>



<div>
          <div className="mx-auto mx-auto w-full">
         

  


    <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black justify-center items-center mx-auto lg:text-center">
  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden flex border-radius-40">
      <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
        <h1 className="font-['Georgia'] text-[2.5rem] font-bold">Skill</h1>
      </div>
    </div>
  </div>

  <div id="achievement" className="box-border bg-cover bg-center bg-no-repeat w-full">
  <div className="overflow-hidden  border-radius-40">
    <div className="lg:flex">
      <div className="flex-1 box-border m-5 text-center rounded-2xl pl-12 pr-10">
        <div className="bg-[#F6F3E4] mx-auto rounded-lg p-12">
          <div className="flex items-center justify-center ">
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="./1.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  OSes
                </Typography>
                <Box>
                  <Rating name="read-only" value={4} readOnly />
                </Box>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex-1 box-border m-5 text-center rounded-2xl pl-12 pr-10">
        <div className="bg-[#F6F3E4] rounded-lg p-12">
          <div className="flex items-center justify-center ">
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="./2.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Database
                </Typography>
                <Box>
                  <Rating name="read-only" value={3} readOnly />
                </Box>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex-1 box-border m-5 text-center rounded-2xl pl-12 pr-10">
        <div className="bg-[#F6F3E4] rounded-lg p-12">
          <div className="flex items-center justify-center ">
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="./3.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Java
                </Typography>
                <Box>
                  <Rating name="read-only" value={2} readOnly />
                </Box>
              </CardContent>
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
      <div className="flex-1 box-border m-5 text-center rounded-2xl pl-12 pr-10">
        <div className="bg-[#F6F3E4] mx-auto rounded-lg p-12">
        <div className="flex items-center justify-center ">
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./4.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WireShark
          </Typography>
          <Box>
              <Rating name="read-only" value={3} readOnly />
            </Box>
        </CardContent>
      </Card>
    </div>
        </div>
      </div>

      <div className="flex-1 box-border m-5 text-center rounded-2xl pl-12 pr-10">
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className="flex items-center justify-center ">
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./5.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             HTML
            </Typography>
            <Box>
              <Rating name="read-only" value={3} readOnly />
            </Box>
      
          </CardContent>
        </Card>
        </div>
        </div>
      </div>

      <div className="flex-1 box-border m-5 text-center rounded-2xl pl-12 pr-10">
        <div className="bg-[#F6F3E4] rounded-lg p-12">
        <div className="flex items-center justify-center ">
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./6.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Python
            </Typography>
            <Box>
              <Rating name="read-only" value={2} readOnly />
            </Box>
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
        </div>


        <div className="p-8 bg-[#f6f3e4] relative rounded-2xl mt-20 mb-20 mx-auto w-full flex items-center font-[georgia]">
        <Image src="/graph.png" alt="email" width="700" height="700" />
        </div>

    

    

   

  
    <div id="hobby" className="box-border bg-cover bg-center bg-no-repeat w-full">
      
     
  
  
  
            <div className="flex justify-center">
          <div className="inline-block bg-[#F6F3E4] p-4 rounded-full w-70"> {/* Increase the width to 56 */}
            <Link href="./skill" target="_blank" rel="noopener noreferrer">
              <div className=" bg-beb3e5 rounded-full p-4 font-[georgia] text-40 font-bold w-70">Know more
              <div className="flex items-center justify-center">
  <FontAwesomeIcon icon={faArrowRight} className="fi fi-rr-arrow-right rounded-full p-0.5 text-sm w-10" />
</div>
              </div>
            </Link>
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