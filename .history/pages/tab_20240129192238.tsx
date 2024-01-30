// SingleTabComponent.tsx

import React, { useState } from 'react';
import Image from 'next/image'
import Box from "@mui/joy/Box";
import Education from './education'

const SingleTabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  interface ProgressCircularBarProps {
    percentage: number;
  }

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  
  

  return (
    <div className="container mx-auto mt-8 p-4 font-[Georgia]">
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 rounded-tr-lg  ${
          activeTab === 1 ? 'bg-[#3A6AF2] text-white border-[#243c5a]' : 'bg-[#3A6AF2]'
        }`}
        onClick={() => handleTabClick(1)}
      >
        Achievement
      </button>
      <button
        className={`px-4 py-2   ${
          activeTab === 2 ? 'bg-[#FFBE25] text-white border-[#243c5a]' : 'bg-[#FFBE25]'
        }`}
        onClick={() => handleTabClick(2)}
      >
        Education
      </button>
      <button
        className={`px-4 py-2 rounded-r-lg ${
          activeTab === 3 ? 'bg-[#F27999] text-white border-[#243c5a]' : 'bg-[#F27999]'
        }`}
        onClick={() => handleTabClick(3)}
      >
        Languages
      </button>
    </div>
  
    <div className="mt-4">
      {activeTab === 1 && (
        <div>
            <div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-[Georgia] text-[2.5rem] font-bold pl-10">Achivement</div>
            <div className="grid place-items-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    <div className="rounded-lg w-30 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-96 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#3A6AF2] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
      <div className="m-1">
        <Image src="/code.png" alt="email" width="50" height="30" />
      </div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">2021-2023</div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
        Receipient of the Jeffery Cheah Scholarship
      </div>
    </div>
    
    <div className="rounded-lg w-30 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-96 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#F27999] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
    <div className="m-1">
        <Image src="/teamwork.png" alt="email" width="50" height="30" />
      </div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">2020</div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
        Awarded Special Merit Scholarship
      </div>
    </div>
  </div>
</div>

        </div>
      )}
      {activeTab === 2 && (
        <div>
            <div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-[Georgia] text-[2.5rem] font-bold pl-10">Education</div>
            <div className="grid place-items-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    <div className="rounded-lg w-80 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-80 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#3A6AF2] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
      <div className="m-1">
        <Image src="/code.png" alt="email" width="50" height="30" />
      </div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">August 2021 to Present</div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
      <div>
      <Education percentage={50} />
    </div>
      </div>
    </div>
    
    <div className="rounded-lg w-80 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-80 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#FFBE25] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
    <div className="m-1">
        <Image src="/teamwork.png" alt="email" width="50" height="30" />
      </div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">Foundation In Science and Technology
</div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
      Foundation In Science and Technology
      </div>
    </div>

    <div className="rounded-lg w-80 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-80 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#F27999] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
    <div className="m-1">
        <Image src="/teamwork.png" alt="email" width="50" height="30" />
      </div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">2015-2019</div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
        SMK Dato Mahmud Paduka Raja (1)
      </div>
    </div>

  </div>
</div>

        </div>
      )}
      {activeTab === 3 && (
        <div>
            <div className="inline-block bg-beb3e5 rounded-full p-4 mt-4 font-[Georgia] text-[2.5rem] font-bold pl-10">Language</div>
            <div className="grid place-items-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    <div className="rounded-lg w-30 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-96 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#3A6AF2] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
      <div className="m-1">
      <div>
      <div className="flex items-center justify-center h-screen">
      <Education percentage={50} />
      <div className="ml-4">
        <input
          type="range"
          min="0"
          max="100"
          value={50}
          
        />
      </div>
    </div>
      {/* Change the percentage value as needed */}
    </div>
      </div>
     
    </div>
    
    <div className="rounded-tl-lg rounded-tr-lg w-30 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-96 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#FFBE25] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
    <div className="m-1">
        <Image src="/teamwork.png" alt="email" width="50" height="30" />
      </div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">Malay</div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
        Virtual Web Server,WAP, DNS and DHCP
      </div>
    </div>
    <div className="rounded-lg w-30 sm:w-48 md:w-56 lg:w-64 xl:w-64 h-96 sm:h-48 md:h-80 lg:h-64 xl:h-64 bg-[#F27999] flex flex-col items-center justify-center text-white p-2 transition-transform transform-gpu hover:scale-105 shadow-lg">
    <div className="m-1">
        <Image src="/web-developer.png" alt="email" width="50" height="30" />
      </div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1.2rem] font-bold p-2">Chinese</div>
      <div className="inline-block bg-beb3e5 rounded-full  text-center font-[Georgia] text-[1rem]  ">
       HTML, CSS and JavaScript
      </div>
    </div>
  </div>
</div>
        </div>
      )}
    </div>
  </div>
  

  );
};

export default SingleTabComponent;
