import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

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

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={"min-h-screen"}>
<Box
      sx={{ bgcolor: 'background.paper', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
    
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black items-center">
      <div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-[Georgia]  text-[2.5rem] font-bold">About Myself</div>
        <table className= "p-2 text-left font-yummy-dinner text-2xl bg-cover bg-center w-full rounded-lg" style={{ backgroundImage: "url('/background2.png')" }}>
          <thead>
            <tr>
              <th className="w-1/3">
                <div className="customtableth">
                  <Image src="/lf (2).png" alt="lengfong" width={1000} height={1000} className="float-left p-4" />
                  <br />
                </div>
              </th>
              <th className="w-1/2">
              <div className="customtableth text-black text-left text-sm md:text-base lg:text-lg xl:text-xl">
                Hi, <a className = "underline decoration-sky-500/30">I am Leng Fong.</a> I was born in Kelantan in the year of 2002. I am currently in my final year at Sunway University, majoring in  <a className = "underline decoration-sky-500/30">Information Technology (Computer Networking and Security).</a>
              </div>
              </th>
            </tr>
          </thead>
        </table>
      
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      
    </Box>


    </div>
    
  );
}
