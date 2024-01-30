import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/'; // Import the CSS file

const CircularProgressBar = ({ percentage }) => {
  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={100}
        thickness={5}
        color="error"
        sx={{
          '& circle': {
            strokeLinecap: 'round',
          },
          '& circle.circular-progress-bar-circle': {
            composes: 'circular-progress-bar-circle', // Apply the CSS class
          },
          '& text': {
            fill: '#000000',
            fontSize: '16px',
            fontWeight: 'bold',
          },
        }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
