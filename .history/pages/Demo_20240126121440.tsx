// Import React and any other required modules
import React, { MouseEvent, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
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
import Rating from '@mui/material/Rating';


// Define the City component
interface CityProps {
  id: string;
  title: string;
  description: string;
}

const City: React.FC<CityProps> = ({ id, title, description }) => (
  <div id={id} className="tabcontent">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Define the Tabs component
const Tabs: React.FC = () => {
  useEffect(() => {
    // Get the element with id="defaultOpen" and click on it
    const defaultOpenElement = document.getElementById('defaultOpen');
    if (defaultOpenElement) {
      defaultOpenElement.click();
    }
  }, []);

  // Handle tab click event
  const openCity = (evt: MouseEvent<HTMLButtonElement>, cityName: string) => {
    const tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach((tab) => (tab as HTMLElement).style.display = 'none');

    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach((tablink) => tablink.classList.remove('active'));

    const cityElement = document.getElementById(cityName);
    if (cityElement) {
      cityElement.style.display = 'block';
    }

    evt.currentTarget.classList.add('active');
  };

  return (
<div className="min-h-screen p-4">
  {/* Tab */}
  <div className="flex">
    {/* Buttons */}
    <div className="w-1/4 p-4">
      <button className="tablinks block w-full bg-gray-300 py-2 px-4 mb-2 rounded-full text-white" onClick={(e) => openCity(e, 'London')} id="defaultOpen">
      <div className="bg-[#beb3e5] flex justify-center transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
              <h2 className="font-georgia text-5xl font-bold text-center text-black">Skill</h2>
            </div>
      </button>
      <button className="tablinks block bg-gray-300 w-full py-2 px-4 mb-2" onClick={(e) => openCity(e, 'Paris')}>
      <div className="bg-[#beb3e5] flex justify-center transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
              <h2 className="font-georgia text-5xl font-bold text-center text-black">Achivement</h2>
            </div>
      </button>
      <button className="tablinks block bg-gray-300 w-full py-2 px-4 mb-2" onClick={(e) => openCity(e, 'Tokyo')}>
      <div className="bg-[#beb3e5] flex justify-center transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
              <h2 className="font-georgia text-5xl font-bold text-center text-black">Language</h2>
            </div>
      </button>
    </div>

    {/* Tab content */}
   
      {/* Assuming City is a component rendering the content */}
      <div id="London" >
      <div>
      <div className={styles.contenta}>
      <div className="p-10 m-1"> 
    <div className="w-3/4 p-8">
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
                  phyton
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
        </div>
      <div id="Paris" >
      
                Hi, <a className = "underline decoration-sky-500/30">I am Leng Fong.</a> I was born in Kelantan in the year of 2002. I am currently in my final year at Sunway University, majoring in  <a className = "underline decoration-sky-500/30">Information Technology (Computer Networking and Security).</a>
              </div>
             
      <City id="Tokyo" title="Tokyo" description="Tokyo is the capital of Japan." />
    </div>
  </div>
</div>
</div>
  


  )  
};

export default Tabs;
