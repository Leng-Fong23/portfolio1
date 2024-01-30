import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={100}
        thickness={5}
        sx={{
          '& circle': {
            strokeLinecap: 'round',
          },
          '& text': {
            fill: '#FF0000', // Change the text color to red
            fontSize: '16px',
            fontWeight: 'bold',
          },
        }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div style={{ fontSize: 16, fontWeight: 'bold', color: '#FF0000' }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
