import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

interface CircularPercentageProps {
  percentage: number;
}

const CircularPercentage: React.FC<CircularPercentageProps> = ({ percentage }) => {
  return (
    <div style={{ textAlign: 'center' }}>
    <CircularProgress
      variant="determinate"
      value={percentage}
      size={100}
      thickness={5}
      color={barColor}
      sx={{
        position: 'relative',
        '& svg': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>
        {percentage}%
      </div>
    </CircularProgress>
  </div>
  );
};

export default CircularPercentage;
