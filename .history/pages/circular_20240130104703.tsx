import React, { useEffect, useState } from 'react';
import './CircularProgress.css'; // Import the CSS file for styling

interface CircularProgressProps {
  radius: number;
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ radius, progress }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = (100 - progress) * (2 * Math.PI * radius) / 100;
    setOffset(progressOffset);
  }, [progress, radius]);

  return (
    <div className="circular-progress-container">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          r={radius - 5}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth="10"
        />
        <circle
          r={radius - 5}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke="#2ecc71"
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
          fill="#2ecc71"
        >
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
