import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme } from '@mui/material/styles';

interface CircularPercentageProps {
  percentage: number;
  barColor?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const CircularPercentage: React.FC<CircularPercentageProps> = ({ percentage }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={100}
        
        thickness={5}
        color="secondary"
      />
      <div style={{  fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>
        {percentage}%
      </div>
    </div>
  );
};

export default CircularPercentage;
