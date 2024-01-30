// SingleTabComponent.tsx

import React, { useState } from 'react';

const SingleTabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex">
  {/* Navigation Bar */}
  <div className="flex-shrink-0 w-1/4">
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col space-y-4">
        <button
          className={`px-4 py-2 ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="flex-grow">
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
      </div>
    </div>
  </div>
</div>

  );
};

export default SingleTabComponent;
