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
      sx={{ position: 'relative' }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 16,
          fontWeight: 'bold',
          color: '#ffffff',
        }}
      >
        {percentage}%
      </div>
    </CircularProgress>
  </div>
  );
};

export default CircularPercentage;
