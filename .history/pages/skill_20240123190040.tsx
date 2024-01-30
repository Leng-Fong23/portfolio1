import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import home from './index';
import feedback from './'
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
import { red } from '@mui/material/colors';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicationIcon from '@mui/icons-material/Medication';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

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
          <div className={styles.container}>
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icon.png" />
          </Head>



          
        
    

        <div  className={styles.boxa}>
        <div className={styles.text}>
        <h1 className={styles.h1}>Extra Co Curiculum</h1>
        <div className={styles.contenta}>
        <Timeline position="alternate">
    <TimelineItem>
  <TimelineOppositeContent
    sx={{ m: 'auto 0' }}
    align="right"
    variant="body2"
    color="text.secondary"
    fontSize="1.5rem"
  >
    2023
  </TimelineOppositeContent>
  <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineDot sx={{ color: 'black' }}>
      <VolunteerActivismIcon sx={{ color: 'black' }} />
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px: 2 }}> 
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
      Member of Sunway Student Volunteer
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography>Join activities that have been organized by Sunway Student 
Volunteer</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
</TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontSize="1.5rem"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: 'black' }}>
            <FoodBankIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
          Vice Head of Department of Program & Committee Member of 30 
Hours Famine in Sunway University.
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography>Organize a DIY camp for 30 hours famine.</Typography>
          <Typography> Communicate with other committee members and give ideas 
          for the event.</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontSize="1.5rem"
        >
          2016 to 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: 'black' }}>
            <NewspaperIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
           Sin Chew Student Reporter Cadet
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography>Organized 2 major camps</Typography>
          <Typography>Learned how to work together in a huge team</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontSize="1.5rem"
        >
          2015 to 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: 'black' }}>
            <TempleBuddhistIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
          Volunteer of Buddhist Society, Kelantan.
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography> Organized Buddhist camp for kids below 12 years old for 
thrice.</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontSize="1.5rem"
        >
          2016 to 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: 'black' }}>
            <NewspaperIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
           Sin Chew Student Reporter Cadet
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography>Organized 2 major camps</Typography>
          <Typography>Learned how to work together in a huge team</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
  <TimelineOppositeContent
    sx={{ m: 'auto 0' }}
    align="right"
    variant="body2"
    color="text.secondary"
    fontSize="1.5rem"
  >
   2015 to 2019 
  </TimelineOppositeContent>
  <TimelineSeparator sx={{ color: 'black' }}>
    <TimelineConnector sx={{ color: 'black' }}/>
    <TimelineDot sx={{ color: 'black' }}>
      <SportsBasketballIcon sx={{ color: 'black' }} />
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent sx={{ py: '12px', px: 2 }}>
<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
    President of Basketball Team & Committee Member, SMK Dato 
Mahmmud Paduka Raja (1)
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography>Responsible in running club meetings, appointing committee, 
and delegating tasks.</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  </TimelineContent>
</TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontSize="1.5rem"
        >
          2015 to 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: 'black' }}>
            <GroupsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        

<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
          Treasurer of Chinese Society Club & Committee Member, SMK Dato 
Mahmmud Paduka Raja (1)
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography>As a photographer for all activities and the person who 
managed Facebook page of the club.</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
        </TimelineContent>
      </TimelineItem>
          
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontSize="1.5rem"
        >
          2015 to 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: 'black' }}>
            <MedicationIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
         

<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
        <Typography variant="h6" component="span">
          Committee Member of Red Crescent, SMK Dato Mahmmud Paduka 
Raja (1)
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
          <div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
          <Typography> Volunteer of rescue team for annual sport in Dato Mahmmud 
and SJK (C) Yuk Cheng</Typography>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
        </TimelineContent>
      </TimelineItem>
    
    </Timeline>
          </div>
        </div>
        </div>

        <div className= " font-['Georgia'] flex-1 text-center sm:text-justify lg:text-justify lg:text-left p-2 sm:p-4 lg:p-4 lg:pl-8 lg:pr-8 pt-3 sm:pt-4 lg:pt-4 font-[georgia] text-1rem text-black">
      <h1 className="font-[''] text-[2.5rem] font-bold">Baking as one of my hobby</h1>
      <div className="p-8 bg-[#f6f3e4] relative rounded-2xl mt-20 mb-20 mx-auto w-full flex items-center font-[georgia]">
        <table className={styles.customtable}>
          <tbody>
            <tr>
            <td className="customtabletd text-center text-black text-[1.5rem]">
                Indulging in the sweetness of homemade joy. 🍰💖
              </td>
              <td className="customtabletd text-center text-black">
              <a href='https://www.youtube.com/watch?v=WdM4ny57BX0'>
                <Image src="/cakelink.png" alt="MBTI" width="600" height='600' className={styles.imgb} /> <br />
                </a>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td className="customtabletd text-center text-black">
                <a href='https://www.youtube.com/watch?v=WdM4ny57BX0'>
                <Image src="/cakelink2.png" alt="MBTI" width="600" height='600' className={styles.imgb} /> <br />
                </a>
              </td>
              <td className="customtabletd text-center text-black text-[1.5rem]">
              Baking love into every fluffy layer of this chiffon masterpiece. 💕
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h1 className="font-['georgia'] text-[2.5rem] font-bold p-4">Nature</h1>
        <>
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
        className="mySwiper min-h-0 pt-12 pb-12" // Add Tailwind CSS classes here
      >
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-30 h-30">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 9" />
        </SwiperSlide>
      </Swiper>
    </>

    <div className="flex items-center justify-center">
  <table className="table-auto">
    <tbody>
      <tr>
        {/* Left Column */}
        <td className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
          <h1 className={styles.h1}>FeedBack</h1>
          <div className={styles.contenta}>
            <div className="p-2 rounded-md">
              <Link href="./feedback">
                <Image src="/arrow.png" alt="email" width="40" height="40" />
              </Link>
            </div>
          </div>
        </td>

        {/* Right Column */}
        <td className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
          <h1 className={styles.h1}>Go Back</h1>
          <div className={styles.contenta}>
            <div className="p-2 rounded-md">
              <Link href="/">
                <Image src="/arrow.png" alt="email" width="40" height="40" />
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    <div className="flex justify-center">
          <div className="inline-block bg-[#F6F3E4] p-4 rounded-full w-100"> {/* Increase the width to 56 */}
          <a href="https://drive.google.com/file/d/1GFbDEpIVxzbKQ3M6xlCxya20VVmTU_74/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <div className=" bg-beb3e5 rounded-full p-10 font-[georgia] text-60 font-bold w-90">Resume.pdf
              <div className="flex items-center justify-center">
                  <Image src="/pdf.png" alt="email" width="80" height="8" className="fi fi-rr-arrow-right rounded-full p-0.5 text-sm w-10" />
                </div>
              </div>
            </a>
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