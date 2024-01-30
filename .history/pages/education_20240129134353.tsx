// CircularProgressBar.tsx

import React, { useEffect, useState } from 'react';

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Ensure the progress is within the valid range (0 to 100)
    const normalizedProgress = Math.min(100, Math.max(0, percentage));
    setProgress(normalizedProgress);
  }, [percentage]);

  return (
    <div className="relative w-32 h-32">
      <svg className="absolute" viewBox="0 0 32 32">
        <circle
          className="text-gray-300"
          r="15.91549430918954"
          cx="16"
          cy="16"
          fill="transparent"
          strokeWidth="2"
        />
        <circle
          className="text-blue-500"
          r="15.91549430918954"
          cx="16"
          cy="16"
          fill="transparent"
          strokeWidth="2"
          strokeDasharray={`${progress} 100`}
          strokeDashoffset="25"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex items-center justify-center w-full h-full">
        <span className="text-lg font-bold text-blue-500">{progress}%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
