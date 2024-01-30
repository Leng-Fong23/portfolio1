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
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-0">
        
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
            <div className="flex justify-center size-[20rem] pb-[10p]"> 
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
                <TextField fullWidth label="fullWidth" id="fullWidth" />
                </Box>
                </div>
                
            
           
                <div className='text-[14px] font-bold flex justify-center'>
            <h1>Thank yout for taking the time to provide feedback</h1>
            </div>
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

       

        {/* Other components */}
      </main>

      <div id="contact" className={styles.boxa}>
        <div className={styles.text}>
          <h1 className={styles.h1}>Find Me On</h1>
          <div className={styles.iconContainer}>
            {/* Social icons */}
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
  );
};

export default FeedbackPage;
