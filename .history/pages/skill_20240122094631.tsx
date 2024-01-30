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

    

<div id="hobby" className="box-border bg-cover bg-center bg-no-repeat w-full">

<div className= "font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
  <h1 className="font-['maintain'] text-[2.5rem] font-bold">Skill</h1>
  <div className="p-8 bg-[#f6f3e4] relative rounded-2xl mt-20 mb-20 mx-auto w-full flex items-center font-[georgia]">
    <table className={styles.customtable}>
      <tbody>
        <tr>
        <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <h2 className="font-['georgia'] text-[5rem] font-bold">Operating System</h2>
        
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
            <p>- Microsoft</p>
            <p>- Mac</p>
            <p>- Linux</p>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
          <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <h2 className="font-['georgia'] text-1.6rem font-bold">Microsoft</h2>
        
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
            <p>- Word</p>
            <p>- Excel</p>
            <p>- Powerpoint</p>
            <p>- OutLook</p>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
        </tr>
      </tbody>

      <tbody>
        <tr>
        <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <h2 className="font-['georgia'] text-1.6rem font-bold">Wireshark</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={60}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
          <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <h2 className="font-['georgia'] text-[5rem] font-bold">HTML</h2>
        
        </Menu.Button>
      </div>

      
    </Menu>
  
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={60}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
        </tr>
      </tbody>

      <tbody>
        <tr>
        <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <h2 className="font-['georgia'] text-[5rem] font-bold">Java</h2>
        
        </Menu.Button>
      </div>

      
    </Menu>
  
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={50}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
          <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <h2 className="font-['georgia'] text-[5rem] font-bold">CSS</h2>
        
        </Menu.Button>
      </div>

      
    </Menu>
  
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={60}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
        </tr>
      </tbody>

      <tbody>
        <tr>
        <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <h2 className="font-['georgia'] text-[5rem] font-bold">Python</h2>
        
        </Menu.Button>
      </div>
    </Menu>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
          <td className="customtabletd text-center text-black ">
        <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <h2 className="font-['georgia'] text-1.6rem font-bold">Database</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={40}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        disabled
      />
    </Box>
        </div>
          </td>
        </tr>
      </tbody>

    </table>
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
            <Box sx={{ display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center', 
                        width: 300,
                        padding:'2rem',
                        marginLeft:'8rem' }}>
              <Slider
                aria-label="Always visible"
                defaultValue={80}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
                disabled
              />
            </Box>
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

      
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <VolunteerActivismIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <FoodBankIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="#e9e9f3">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>





       

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