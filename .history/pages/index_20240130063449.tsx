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
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicationIcon from '@mui/icons-material/Medication';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SingleTabComponent from './tab';

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

  const [activeTab, setActiveTab] = useState<number>(1);

  // Function to handle tab change
  const handleTabChange = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

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

          <nav className=" w-full flex bg-white text-black p-4 justify-center z-50">
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

          <div className="min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed " style={{ backgroundImage: 'url("/Confetti.jpeg")' }}>
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
  <div className="flex flex-col lg:flex-row items-center justify-center">
    {/* Profile Image */}
    <div className="w-full sm:w-1/2 lg:w-1/3">
      <div className="customtableth">
        <Image src="/profile.png" alt="lengfong" width={300} height={200} className="float-right px-2 m-10" />
      </div>
    </div>

    {/* Container */}
    <div className="lg:w-2/3 lg:p-10">
    <div className="rounded-full p-4 mt-4 text-left font-[Georgia] text-[2.5rem] font-bold">About Me</div>
      <div className="flex flex-col lg:flex-row lg:p-4 bg-[#EEEDEB] rounded-lg m-10 p-10">
        {/* Left side */}
        <div className="lg:w-2/3 lg:p-10">
          <div className="text-black text-left text-sm md:text-base lg:text-lg xl:text-xl">
            Hi, <a className="underline decoration-sky-500/30">I am Leng Fong.</a> I was born in Kelantan in the year of 2002. I am currently in my final year at Sunway University, majoring in <a className="underline decoration-sky-500/30">Information Technology (Computer Networking and Security).</a>
          </div>
          <div className="justify-center">
            <div className="inline-block p-2 rounded-full w-70">
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
        <div className="lg:w-1/3 mx-auto text-center align-center lg:pl-10 pt-2 flex flex-col items-center justify-center">
      <div className="inline-block bg-beb3e5 rounded-full  font-[Georgia] text-[1.5rem] font-bold  ">Skill</div>
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
</div>

<div>
        <div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-[Georgia] text-[2.5rem] font-bold pl-240">Project</div>
        <div className="grid place-items-center">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

<div className="rounded-lg w-80 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-80 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#3A6AF2] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
<div className="m-1">
    <Image src="/teamwork.png" alt="email" width="50" height="30" />
  </div>
  <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">Foundation In Science and Technology
</div>
  <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
  Foundation In Science and Technology
  </div>
</div>

<div className="rounded-lg w-80 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-80 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#FFBE25] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
<div className="m-1">
    <Image src="/teamwork.png" alt="email" width="50" height="30" />
  </div>
  <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">Foundation In Science and Technology
</div>
  <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
  Foundation In Science and Technology
  </div>
</div>

<div className="rounded-lg w-80 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-80 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#F27999] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
<div className="m-1">
    <Image src="/teamwork.png" alt="email" width="50" height="30" />
  </div>
  <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">2015-2019</div>
  <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
    SMK Dato Mahmud Paduka Raja (1)
  </div>
</div>

</div>
</div>

    </div>








<div className="flex justify-center items-center">
  <div className="flex-1 text-center sm:text-justify lg:text-left -mt-2 sm:p-4 lg:p-2 lg:pl-20 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black justify-center items-center mx-auto">
  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden flex border-radius-40">
      <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-left  sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 ] text-1rem text-black">
        <h1 className=" text-[2.5rem] font-bold">Extra-Cocuriculum</h1>
      </div>
    </div>
  </div>

  <div id="achievement" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden  border-radius-40">
      <div className="lg:flex">
      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[EEEDEB] rounded-lg lg:pl-40 md:px-12">
        <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <VolunteerActivismIcon sx={{ color: 'black' }} />
    </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2023
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '10px', px: 0 }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
      Member of Sunway Student Volunteer
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black ">
          <Typography>Join activities that have been organized by Sunway Student 
          Volunteer
          <img src="/sunway.jpg" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <FoodBankIcon sx={{ color: 'black' }} />
    </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2022
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px:'0' }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
        30 Hours Famine in Sunway University.
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black">
          <Typography>Organize a DIY camp for 30 hours famine.</Typography>
          <Typography> Communicate with other committee members and give ideas 
          for the event.
          <img src="/famine.png" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <NewspaperIcon sx={{ color: 'black' }} />
    </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 2016 to 2019
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px:'0' }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
        Sin Chew Student Reporter Cadet
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black ">
          <Typography>Organized 2 major camps</Typography>
          <Typography>Learned how to work together in a huge team
          <img src="/sinchew.jpg" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <TempleBuddhistIcon sx={{ color: 'black' }} />
    </TimelineDot>
          
        </TimelineSeparator>
        <TimelineContent> 2016 to 2019
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px:'0' }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
        Volunteer of Buddhist Society, Kelantan.
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black ">
          <Typography> Volunteer of Buddhist Society, Kelantan.
          <img src="/fojiaohui.png" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
      
        </div>
      </div>
      <div className={`${styles.floatchild} lg:w-1/2`}>
        <div className="bg-[EEEDEB] rounded-lg px-1 md:px-12 -mt-10 md:-mt-0">
        <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <SportsBasketballIcon sx={{ color: 'black' }} />
    </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2015 to 2019 
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px:'0' }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
        President of Basketball Team
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black ">
          <Typography>Responsible in running club meetings, appointing committee, 
and delegating tasks.
<img src="/basketball.jpg" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <FoodBankIcon sx={{ color: 'black' }} />
    </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2015 to 2019
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px:'0' }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
        Treasurer of Chinese Society Club 
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black">
          <Typography> As a photographer for all activities and the person who 
managed Facebook page of the club.
<img src="/hw.jpg" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <NewspaperIcon sx={{ color: 'black' }} />
    </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 2015 to 2019
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px:'0' }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
        Committee Member of Red Crescent
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black ">
          <Typography> Volunteer of rescue team for annual sport in Dato Mahmmud 
and SJK (C) Yuk Cheng
<img src="/redcresent.jpg" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot sx={{ color: 'black' }}>
      <TempleBuddhistIcon sx={{ color: 'black' }} />
    </TimelineDot>
          
        </TimelineSeparator>
        <TimelineContent>  2016 to 2019
        <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px:'0' }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography className="text-left" style={{ display: 'flex', alignItems: 'center' }}>
        Leo Club Member
      <Image
        src="/down.png"
        alt="email"
        width="30"
        height="30"
        className={styles.jumpingimage}
      />
    </Typography>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items >
  <div className="py-1 text-white">
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="p-10rem  py-10 ss text-black ">
          <Typography>Organized 2 major camps</Typography>
          <Typography>Learned how to work together in a huge team
          <img src="/leo.jpg" alt="Bullet Point"  width="400" height='400'/>
</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </div>
    </div>
      </div>
    </div>
  </div>
  </div>
</div>






    
 <div>
      <SingleTabComponent />
    </div>
    

   

  
    <div id="hobby" className="box-border bg-cover bg-center bg-no-repeat w-full">
      
     
  
  
    <div className="inline-block p-4 rounded-full w-70"> {/* Increase the width to 56 */}
        <Link href="./skill" target="_blank" rel="noopener noreferrer">
          <div className={styles.btngrad}>
            <div className="rounded-full p-2 font-[georgia] text-[0.7rem] font-bold w-70">Know More
            </div>
          </div>
        </Link>
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