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
        color="primary"
      />
      <div style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold', color: '#3A6AF2' }}>
        {percentage}%
      </div>
    </div>
  );
};

export default CircularPercentage;
