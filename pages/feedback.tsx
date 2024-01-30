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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

<style jsx global>
  {`
.contenta {
  padding: 20px 100px;
  background-color: #F6F3E4;
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  align-items: center;
}


  `}
  </style>


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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <div className="min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed " style={{ backgroundImage: 'url("/Confetti.jpeg")' }}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="min-h-screen  justify-center items-center bg-cover bg-center bg-no-repeat mt-0">
        
          <div className={styles.text}>
            <h1 className="font-['georgia'] text-[2.5rem] font-bold pb-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">FeedBack Form</h1>
        
             {/* Autocomplete Component */}
        <div className={`${styles.text} p-4 lg:w-96 lg:h-96`}>
          <div className=" "></div>
          <div className={styles.contenta}>
            <div className={"flex-auto justify-center"}>
                
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
            
            <div className= 'text-[14px] font-bold flex justify-center'> 
            <React.Fragment>
                      <Button onClick={handleClickOpen}>
                      <div className={styles.btngrad}>
              <h2 className="font-georgia text-5xl font-bold text-center text-black">Submit</h2>
            </div>
          </Button>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Thank You For Your Submission!"}
                  </DialogTitle>
                </Dialog>
              </React.Fragment>
            </div>
           
            

        </div>
        </div>
        </div>
  
     
  
  
  
      

        </main>
       

        {/* Other components */}
      

    </div>
  );
};

export default FeedbackPage;
