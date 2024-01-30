import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

interface CircularPercentageProps {
  percentage: number;
  barColor?: CircularProgressProps['color'];
}

const CircularPercentage: React.FC<CircularPercentageProps> = ({ percentage, barColor = 'secondary' }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={100}
        thickness={5}
        color={barColor}
        sx={{
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
    </div>
  );
};

export default CircularPercentage;
