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
      <div className="absolute w-full h-full transform rotate-45">
        <div
          className={`absolute w-full h-full bg-gray-300 rounded-full ${
            progress === 100 ? 'animate-pulse' : ''
          }`}
        ></div>
        <div
          className={`absolute w-full h-full bg-blue-500 rounded-full transform rotate-${progress * 1.8} origin-left`}
        ></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <span className="text-lg font-bold text-blue-500">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
