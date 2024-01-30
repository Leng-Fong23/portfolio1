import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const FeedbackPage = () => {
  const top100Films = [
    { label: 'Male' },
    { label: 'Female' },
    { label: 'Prefer Not To Say' },
  ];

  const [selectedGender, setSelectedGender] = useState(null);

  const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));

  const customIcons: {
    [index: string]: {
      icon: React.ReactElement;
      label: string;
    };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return (
      <span {...other} style={{ fontSize: '24px' /* Adjust the size as needed */ }}>
        {customIcons[value].icon}
      </span>
    );
  }
  

  return (
    <div className ='min-screen-h'>

    
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className=" flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-0">
        
          <div className={styles.text}>
            <h1 className={styles.h1}>FeedBack Form</h1>
        
             {/* Autocomplete Component */}
        <div className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
          <div className={styles.contenta}>
            <div className={"flex justify-center"}>
                
            </div>
            <div className='text-[14px] font-bold flex justify-center'>
            <h1>Select Gender</h1>
            </div>
         
          <div className="flex justify-center pb-[4rem]">
            <Autocomplete
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                value={selectedGender}
                onChange={(event, newValue) => setSelectedGender(newValue)}
                renderInput={(params) => <TextField {...params} label="Gender" />}
            />
            </div>

            <div className='text-[14px] font-bold flex justify-center'>
            <h1>Your Statisfaction</h1>
            </div>
            <div className="flex justify-center size-[20rem] pb-10rem]"> 
            <StyledRating
                style={{ fontSize: '24px', maxWidth: '150%' }}
                name="highlight-selected-only"
                defaultValue={5}
                size="large"
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly
            />
            </div>
            


                {/* ................Text Field................ */}

            <div className='text-[14px] font-bold flex justify-center'>
            <h1>Comment</h1>
            </div>
                
                <div className="flex justify-center"> 
                <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Write Your Comment Here" id="Write Your Comment Here" />
                </Box>
                </div>
                
            
           
                <div className='text-[14px] font-bold flex justify-center'>
            <h1>Thank yout for taking the time to provide feedback</h1>
            </div>
            
            <div className='text-[14px] font-bold flex justify-center bg-indigo-500'>
            <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
        <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button>
        <h2 className="font-['georgia'] text-[5rem] font-bold text-center">Submit</h2>
        
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
            <p> Thank You for Your Submission</p>
          </div>
        </a>
      )}
    </Menu.Item>
  </div>
</Menu.Items>
      </Transition>
    </Menu>
  
        </div>
            </div>
            

        </div>
        </div>
        </div>
       
        </main>
        <div id="hobby" className="box-border bg-cover bg-center bg-no-repeat w-full">
      
     
  
  
  
            <div className="flex justify-center ">
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
      </div>

        {/* Other components */}
      

      
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
  );
};

export default FeedbackPage;
