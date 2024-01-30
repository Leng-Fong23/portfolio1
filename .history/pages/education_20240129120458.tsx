import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface CircularPercentageProps {
  percentage: number;
}

const CircularPercentage: React.FC<CircularPercentageProps> = ({ percentage }) => {
  const [animatedColor, setAnimatedColor] = useState('secondary');

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the condition based on your scroll position
      if (window.scrollY > 200) {
        setAnimatedColor('primary');
      } else {
        setAnimatedColor('secondary');
      }
    };

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={100}
        thickness={5}
        color={animatedColor}
        sx={{
          transition: 'color 0.3s ease-in-out', // Add a transition effect
          '& circle': {
            strokeLinecap: 'round',
          },
          '& text': {
            fill: '#ffffff',
            fontSize: '16px',
            fontWeight: 'bold',
          },
        }}
      >
        {`${percentage}%`}
      </CircularProgress>
      <div style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>
        {percentage}%
      </div>
    </div>
  );
};

export default CircularPercentage;
