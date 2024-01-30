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
<Box className="flex-grow lg:flex sm:block h-224"
       
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Skill" {...a11yProps(0)} />
        <Tab label="Achievment" {...a11yProps(1)} />
        <Tab label="Language" {...a11yProps(2)} />
    
      </Tabs>
      <TabPanel value={value} index={0}>
     
      <div>
          
         

  


    <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black justify-center items-center mx-auto lg:text-center">
  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden flex border-radius-40">
      <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
        <h1 className="font-['Georgia'] text-[2.5rem] font-bold">Skill</h1>
      </div>
    </div>
  </div>

  <div>
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
            <Typography gutterBottom variant="h5" >
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
