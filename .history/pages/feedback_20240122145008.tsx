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
  
  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-0">
        <div className={styles.boxa}>
          <div className={styles.text}>
            <h1 className={styles.h1}>FeedBack Form</h1>
             {/* Autocomplete Component */}
        <div className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
          <div className={styles.contenta}>
            <div className={"flex justify-center"}>
                
            </div>
          <h1 className=" flex justify-center">Select Gender</h1>
          <div className="flex justify-center">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                value={selectedGender}
                onChange={(event, newValue) => setSelectedGender(newValue)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
            />
            </div>

           
            <h1 className=" flex justify-center">Your Statisfaction</h1>
            <div className="flex justify-center"> 
            <StyledRating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly
                />
                </div>
                {/* ................Text Field................ */}
                <h1 className={styles.h2}>Comment</h1>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField fullWidth label="fullWidth" id="fullWidth" />
                    </Box>
            
           

                    <h1 className={styles.h2}>Thank yout for taking the time to provide feedback</h1>
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
