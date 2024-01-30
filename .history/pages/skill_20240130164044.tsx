import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import home from './index';
import demo from './Demo';
import feedback from './'
import Slideshow from './Slideshow';
import Slides from './swiper'
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
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Typography from '@mui/material/Typography';
import { handleNavClick } from './utils'; 
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { red } from '@mui/material/colors';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicationIcon from '@mui/icons-material/Medication';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Rating from '@mui/material/Rating';


// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import 'swiper/css/effect-cards';
import 'swiper/css';









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
           <div>
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
          </Head>
    
          <div className="min-h-screen  bg-cover bg-no-repeat bg-center bg-fixed " style={{ backgroundImage: 'url("/Confetti.jpeg")' }}>
          <h1 className="font-[georgia] text-[2rem] font-bold p-4">Life Moment</h1>
        <div className ='mx-3'>
      <div className="w-[50%] sm:w-[80%] mx-auto px-[10px]">
      <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  className="min-h-0 py-12 ml-10 sm:ml-0" // Add Tailwind CSS classes here
>
  <SwiperSlide className="bg-center bg-cover w-[10%] sm:w-[20%] h-auto ">
    <img className="block mx-auto" src="./life (1).jpeg" alt="Nature 1" width="300" height="300"/>
  </SwiperSlide>
  <SwiperSlide className="bg-center bg-cover w-[10%] sm:w-[20%] h-auto">
    <img className="block mx-auto" src="./life (3).jpeg" alt="Nature 2" width="300" height="300" />
  </SwiperSlide>
  <SwiperSlide className="bg-center bg-cover w-[10%] sm:w-[20%] h-auto">
    <img className="block  mx-auto" src="./life (2).jpeg" alt="Nature 3" width="300" height="300" />
  </SwiperSlide>
  <SwiperSlide className="bg-center bg-cover w-[10%] sm:w-[20%] h-auto">
    <img className="block  mx-auto" src="./life (4).jpeg" alt="Nature 4" width="300" height="300" />
  </SwiperSlide>
  <SwiperSlide className="bg-center bg-cover w-[10%] sm:w-[20%] h-auto">
    <img className="block  mx-auto" src="./life (5).jpeg" alt="Nature 5" width="300" height="300"/>
  </SwiperSlide>
</Swiper>


      </div>
      
    </div>

    

<div>
<h1 className="font-[Georgia] text-[2rem] sm:text-[2.5rem] font-bold p-2">Travelling </h1>
<div className={styles.contentb}>
    <Slides/>
</div>
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

      <div className="flex items-center justify-center">
  <table className="table-auto">
    <tbody>
      <tr>
        {/* Left Column */}
        <td className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
        <div className="inline-block p-4 rounded-full w-70"> {/* Increase the width to 56 */}
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <div className={styles.btngrad}>
            <div className="rounded-full p-2 font-[georgia] text-[0.7rem] font-bold w-70">GoBack
            </div>
          </div>
        </Link>
      </div>
        </td>

        {/* Right Column */}
        <td className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
        <div className="inline-block p-4 rounded-full w-70"> {/* Increase the width to 56 */}
        <Link href="./feedback" target="_blank" rel="noopener noreferrer">
          <div className={styles.btngrad}>
            <div className="rounded-full p-2 font-[georgia] text-[0.7rem] font-bold w-70">FeedBack
            </div>
          </div>
        </Link>
      </div>
        </td>
      </tr>
    </tbody>
  </table>
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