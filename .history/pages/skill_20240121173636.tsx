import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import home from './index';
import Slideshow from './Slideshow';
import router from "next/router"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';

// index.tsx
import { handleNavClick } from './utils'; 

<style jsx global>
  {`



.p{
  font-size: 18px;
  padding: 10px;
}

/* Default style for navigation item links */
.nav-item a {
  text-decoration: none;
  color: #333; /* Default text color for navigation items */
  transition: color 0.3s ease; /* Smooth transition for color change */
}

.homeText {
  /* Your existing styling for the "Home" text */
  color: black;
  font-family: Georgia;
  font-weight: bold;
}
.nav-item a {
  color: #000; /* Change the default text color */
  text-decoration: none;
  transition: color 0.3s ease; /* Add a smooth color transition on hover */
}

.nav-item a:hover {
  color: #00f; /* Change the text color on hover */
}
.skillText {
  /* Styling for the "Skill" text */
  color: black;
  font-family: Georgia;
  font-weight: bold;
}

.achivementText {
  /* Styling for the "Achivement" text */
  color: black;
  font-family: Georgia;
  font-weight: bold;
}

.contactText {
  /* Styling for the "Contact" text */
  color:black;
  font-family: Georgia;
  font-weight: bold;
}

.homeText:hover{
  font-size: 1.08rem;
  color:#776B5D;
}
.skillText:hover{
  font-size: 1.08rem;
  color:#776B5D;
}
.achivementText:hover{
  font-size: 1.08rem;
  color:#776B5D;
}

.contactText:hover{
  font-size: 1.08rem;
  color:#776B5D;
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

@font-face {
  font-family: 'Maintain';
  src: url('../font/Maintain.otf') format('opentype');
}

@font-face {
  font-family: 'Yummy Dinner';
  src: url('../font/Yummy Dinner.otf') format('opentype');
}

/* The actual timeline (the vertical ruler) */

.content {
  padding: 2rem;
  background-color: #F6F3E4;
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  align-items: center;
}



.contenta {
  padding: 20px 100px;
  background-color: #F6F3E4;
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  align-items: center;
}

@media (max-width: 600px) {
  .content,
  .contenta {
    width: 100%;
    padding: 1rem;
  }

  .text {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}



.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 0px;
}

.box {
 
  height: auto;
  left: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.alignright{
  transform: scale(1.1);
}

.boxa {
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width:100%;
}


.h1{
  font-family: Maintain;
  font-size: 2.5rem ;
  font-weight: bold;
}

.text{
  flex: 1;
  text-align: center;
  text-align: justify;
  padding-left:2rem;
  padding-right:2rem;
  padding-top: 3%;
  font-family: Georgia;
  font-size: 1rem ;
  color: black;
}

.text:hover{
  font-size: 1.5rem;
}

.texta{
  flex: 1;
  text-align: center;
  text-align: justify;
  padding-left:2rem;
  padding-right:2rem;
  padding-top: 3%;
  font-family: Georgia;
  font-size: 1.5rem ;
  color: black;
  align-items: center;
}

.text:hover{
  font-size: 1.6rem;
}

.li {
  display: flex;
  align-items: center;
}
.topic,
.topica {
  font-style: italic;
  font-family: Georgia;
}

.topic {
  font-size: 1rem;
  padding-left: 0.5rem; /* Adjust the padding as needed */
  display: block; /* Make it a block-level element */
}

.topica {
  font-size: 1.2rem;
  padding-left: 2rem;
  display: block; /* Make it a block-level element */
}


.year{
  font-family: Georgia;
  font-size: 1.6rem ;
  font-weight:bold;
}

.imageandtext {
  display: flex; /* Use flexbox */
  align-items: center; /* Align items vertically */
}

.ul {
  list-style: none; /* Remove default list styles */
  padding: 0;
  align-items: center; /* Align items vertically */
}

.li {
  display: flex;
  align-items: center; /* Align items vertically */
   /* Center items horizontally */
  margin: 0; /* Remove default margin */
  padding-left: 20px;
   /* Adjust the padding to add space between image and text */
}



/* In your styles.module.css or external CSS file */
.navbar {
  position:fixed;
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

@media only screen and (max-width: 600px) {
  .navbar {
    padding: 5px; /* Adjust padding for smaller screens */
  }

  .nav-item {
    margin-right: 10px;
    margin-left: 10px;
  }

  .nav-item li {
    padding: 5px; /* Adjust padding for smaller screens */
  }

  .link {
    color: black; /* Text color for links on smaller screens */
  }

  .link:hover {
    color: #3498db; /* Text color on hover for links on smaller screens */
  }

  .dropdown-content {
    background-color: #f6f6f6; /* Dropdown background color on smaller screens */
  }

  .dropdown-content a {
    color: black; /* Dropdown item text color on smaller screens */
  }

  .dropdown-content a:hover {
    background-color: #e5e5e5; /* Dropdown item background color on hover for smaller screens */
  }
}

/* Link styles */
.link {
  text-decoration: none;
  color: white; /* Text color */
}

.link:hover {
  color: yellow; /* Text color on hover */
}

/* Dropdown styles */
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


.img {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 4rem; /* Adjust as needed for larger screens */
}
@media (min-height: 600px) {
  .img {
    padding-top: 5rem;
  }
}
.img img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  transition: transform 0.3s ease;
  transform: scale(1.1);
}

/* In your styles.module.css or external CSS file */
.logo {
  max-width: 100%; /* Ensure the logo doesn't exceed its natural size */
  height: auto; /* Maintain aspect ratio */
  margin: 10px; /* Adjust margin as needed */
}

.iconContainer {
  display: inline-block;
  margin-right: 10px;
  background-color: #F6F3E4; /* Set your desired background color */
  padding: 10px; /* Adjust padding as needed */
  border-radius: 50%; /* Optional: Add border-radius for a circular background */
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

.logo:hover {
  height:1.3rem;
}
/* FloatContainer.css */

/* FloatContainer.css */

.floatcontainer {
  overflow: hidden;
  display: flex; /* Change display to flex */
  border-radius: 40px;

}

.floatchild {
  /* Remove float and set width to auto */
  flex: 1;
  box-sizing: border-box;
  margin: 10px 10px;
  text-align: center;
  border-radius: 40px;
  padding-left: 10px;
  padding-right: 10px;
}


.green {
  background-color: #F6F3E4;
  border-radius: 40px;

  padding-left: 3rem;
  /* Add other styles as needed */
}

.blue {
  background-color: blue;
  /* Add other styles as needed */
}


/* Adjust the width for larger screens */
@media (max-width: 600px) {
  .floatchild {
    width: 100%;
    padding:1rem;
  }


}

/* Adjust the width for even larger screens */
@media (min-width: 1200px) {
  .floatchild {
    width: 30%;
  }
}

.icona {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
}

.icon:hover{
  transform: scale(1.4);
}





.iconContainera {
  display: inline-block;
  background-color: #beb3e5; /* Set your desired background color */
  border-radius: 50%; /* Optional: Add border-radius for a circular background */
  padding: 10px;
  margin-top: 1rem;
  align-items: center;
}

/* YourComponentStyles.css */

/* YourComponentStyles.css */

.customtable {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 10px;
  align-items: center;
}

.customtableth {
  padding: 8px;
  text-align: left;
  font-family: 'Yummy Dinner', cursive;
  font-size: 40px;
}

.customtabletd {
  padding: 8px;
  text-align: center;
}

.imgb {
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease-in-out;
}

.imgb:hover{
  transform: scale(1.2);
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
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  function valuetext(value: number) {
    return `${value}°C`;
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





// Navigation bar component
// Update the Navbar component
const Navbar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <nav className={styles.navbar}>
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
    { title: 'Home', link: '/' },
    { title: 'Skill', link: './skill' }, // Assuming 'skill' is a separate page
    { title: 'Achivement', link: '#achivement' },
    { title: 'Contact', link: '#contact' },
  ];
  return (
          <div className={styles.container}>
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
          </Head>



      <main className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-0">
    
         
       
        
        <div  className={styles.boxa}>
        <div className={styles.text}>
        <h1 className={styles.h1}>Skill</h1>
        <div className={styles.contenta}>
          <div className ="flex items-center justify-center">
          <Image src="/skill.png" alt="skill" width={900}height={500} />
          </div>
          </div>
        </div>
        </div>
          
        <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black items-center">
      <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
        <div className="overflow-hidden flex border-radius-40">
        <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
              <h1 className="font-['maintain'] text-[2.5rem] font-bold">Education</h1>
        </div>
      </div>
    </div>

    <div id="achievement" className="box-border bg-cover bg-center bg-no-repeat w-full">
  
    <div className="overflow-hidden flex border-radius-40">
      
      <div className={styles.floatchild}>
        <div className="bg-[#F6F3E4] rounded-lg p-4">
       
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <h2 className="font-['georgia'] text-1.6rem font-bold">August 2021 to present</h2>
        </div>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <img src="/sunway.jpeg" alt="Bullet Point"  width="500" height='500'/>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
   
        

        
                <div className="list-none p-2 items-center">
            <div className={styles.li}>
          
            <div className="topica text-1.2rem pl-8 italic font-georgia block ">
           <p>BSc (Hons) Information Technology (Computer Networking and Security) </p> 
            <p>Sunway University, Selangor </p>
            <p>Major: Computer Networking and Security </p>
            <p> CGPA of Year 1: 3.57</p>
            <p> CGPA until latest semester: 3.65 </p>
            {'\n'}
            </div>
            </div>
          </div> 

          

           

        </div>
      </div>
      <div className={styles.floatchild}>
      <div className="bg-[#F6F3E4] rounded-lg p-4">
      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <h2 className="font-['georgia'] text-1.6rem font-bold">September 2020 to July 2021</h2>
        </div>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 p-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className="p-10 py-10 ss">
                  <img src="/sunway.jpeg" alt="Bullet Point"  width="500" height='500'/>
                  </div>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
   
        <div className="list-none p-2 items-center">
            <div className={styles.li}>
          
            <div className="topica text-1.2rem pl-8 italic font-georgia block"> 
           <p>Foundation In Science and Technology </p>
           <p>Sunway College, Selangor </p>
           <p>Course taken: Introduction to Programming, Basic Computer Concept, ICT Application Skills </p> 
           <p>Results: 3.84 CGPA </p> 
                        </div>
             </div>
          </div> 
          </div>
      </div>
    
  </div>
</div>
        </div>



<div className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
  <h1 className={styles.h1}>Resume.pdf</h1>
  <div className={styles.contenta}>
    <div className="p-2 rounded-md ">
      <a href="https://drive.google.com/file/d/1GFbDEpIVxzbKQ3M6xlCxya20VVmTU_74/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <Image src="/pdf.png" alt="email" width="40" height="40" />
      </a>
    </div>
  </div>
</div>

<div className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
  <h1 className={styles.h1}>Go Back</h1>
  <div className={styles.contenta}>
    <div className="p-2 rounded-md ">
      <Link href="/">
        <Image src="/arrow.png" alt="email" width="40" height="40" />
      </Link>
    </div>
  </div>
</div>
        </main>

        <div className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
  <h1 className={styles.h1}>Skill</h1>
       <div className={styles.contenta}>
    <div className="p-2 rounded-md ">
    <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
      </div>
      </div>
      </div>

      <div id="hobby" className="box-border bg-cover bg-center bg-no-repeat w-full">


  <div className="p-8 bg-[#f6f3e4] relative rounded-2xl mt-20 mb-20 mx-auto w-full flex items-center font-[georgia]">
    <table className={styles.customtable}>
      <tbody>
        <tr>
        <td className="customtabletd text-center text-black text-[1.5rem]">
            Indulging in the sweetness of homemade joy. 🍰💖
          </td>
          <td className="customtabletd text-center text-black">
            <Image src="/cake1.png" alt="MBTI" width="500" height='500' className={styles.imgb} /> <br />
          </td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td className="customtabletd text-center text-black">
            <Image src="/cake2.png" alt="MBTI" width="500" height='500' className={styles.imgb} /> <br />
          </td>
          <td className="customtabletd text-center text-black text-[1.5rem]">
          Baking love into every fluffy layer of this chiffon masterpiece. 💕
          </td>
        </tr>
      </tbody>
    </table>
</div>


       

              <div id="contact" className={styles.boxa}>
            <div className={styles.text}>
              <h1 className={styles.h1}>Find Me On</h1>
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