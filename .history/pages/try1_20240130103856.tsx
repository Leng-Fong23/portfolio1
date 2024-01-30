import React, { useEffect, useState } from 'react';

const CircularProgress: React.FC<{ radius: number; progress: number }> = ({ radius, progress }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = (100 - progress) * (2 * Math.PI * radius) / 100;
    setOffset(progressOffset);
  }, [progress, radius]);

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        r={radius - 5} // Adjust the radius of the circle based on your design
        cx={radius}
        cy={radius}
        fill="transparent"
        stroke="#e0e0e0" // Color of the circle background
        strokeWidth="10" // Thickness of the circle
      />
      <circle
        r={radius - 5}
        cx={radius}
        cy={radius}
        fill="transparent"
        stroke="#2ecc71" // Color of the progress bar
        strokeWidth="10"
        strokeDasharray={`${2 * Math.PI * radius}px`}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill="#2ecc71" // Color of the text
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

const App: React.FC = () => {
  // Example usage of CircularProgress component
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Circular Progress Bar Example</h1>
      <CircularProgress radius={50} progress={75} />
    </div>
  );
};
