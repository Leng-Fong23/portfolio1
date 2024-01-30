// SingleTabComponent.tsx

import React, { useState } from 'react';

const SingleTabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
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
      <button
        className={`px-4 py-2 ${
          activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
        onClick={() => handleTabClick(3)}
      >
        Tab 3
      </button>
    </div>
  
    <div className="mt-4">
      {activeTab === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Content for Tab 1</h2>
          <p>This is the content for Tab 1. Add your text here.</p>
        </div>
      )}
      {activeTab === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Content for Tab 2</h2>
          <p>This is the content for Tab 2. Add your text here.</p>
        </div>
      )}
      {activeTab === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Content for Tab 3</h2>
          <p>This is the content for Tab 3. Add your text here.</p>
        </div>
      )}
    </div>
  </div>
  

  );
};

export default SingleTabComponent;
