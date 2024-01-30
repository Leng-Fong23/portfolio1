
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
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
import * as React from 'react';
import { Chart } from "react-google-charts";


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

const data = [
  ["Language", "Percentage"],
  ["Malay", 25],
  ["Chinese", 30],
  ["English", 25],
  ["Hokkien", 20], // Below limit.
];

const options = {
  title: "Language",
  sliceVisibilityThreshold: 0.2, // 20%
};




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
  <div className={styles.contenta}>
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
        

 
      </TabPanel>
     
      <TabPanel value={value} index={1}>
      <div className="flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1.5rem text-black justify-center items-center mx-auto lg:text-center">
  <div id="achievment" className="box-border bg-cover bg-center bg-no-repeat w-full">
    <div className="overflow-hidden flex border-radius-40">
      <div className="font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
        <h1 className="font-['Georgia'] text-[2.5rem] font-bold">Achievement</h1>
      </div>
    </div>
  </div>

  <div className={styles.contenta}>
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
</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.contenta}>
          <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
      
      </TabPanel>
      
    </Box>


    </div>
    
  );
}
