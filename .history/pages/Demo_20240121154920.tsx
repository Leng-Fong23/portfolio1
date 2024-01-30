import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={30} step={10} marks min={10} max={100} disabled />
      <Slider defaultValue={30} step={10} marks min={10} max={100} disabled />
      <Slider defaultValue={30} step={10} marks min={10} max={100} disabled />
    </Box>

    
  );
}
