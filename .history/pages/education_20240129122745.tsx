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
    <div className="relative">
      <div className="w-20 h-20 border-4 border-gray-300 rounded-full"></div>
      <div
        className="absolute top-0 left-0 w-full h-full border-4 border-t-4 border-blue-500 rounded-full"
        style={{
          transform: `rotate(${(progress / 100) * 360}deg)`,
          transformOrigin: 'center',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-lg font-bold text-blue-500">{progress}%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
