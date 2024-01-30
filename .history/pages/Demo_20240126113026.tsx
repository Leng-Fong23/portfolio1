// Import React and any other required modules
import React, { MouseEvent, useEffect } from 'react';
import styles from '../styles/Home.module.css'

// Define the City component
interface CityProps {
  id: string;
  title: string;
  description: string;
}

const City: React.FC<CityProps> = ({ id, title, description }) => (
  <div id={id} className="tabcontent">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Define the Tabs component
const Tabs: React.FC = () => {
  useEffect(() => {
    // Get the element with id="defaultOpen" and click on it
    const defaultOpenElement = document.getElementById('defaultOpen');
    if (defaultOpenElement) {
      defaultOpenElement.click();
    }
  }, []);

  // Handle tab click event
  const openCity = (evt: MouseEvent<HTMLButtonElement>, cityName: string) => {
    const tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach((tab) => (tab as HTMLElement).style.display = 'none');

    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach((tablink) => tablink.classList.remove('active'));

    const cityElement = document.getElementById(cityName);
    if (cityElement) {
      cityElement.style.display = 'block';
    }

    evt.currentTarget.classList.add('active');
  };

  return (
<div className="min-h-screen">
    <div className={styles.contenta}>
      
  {/* Tab */}
  <div className="flex">
    {/* Buttons */}
    <div className="w-1/4 p-4">
      <button className="tablinks block w-full bg-gray-300 py-2 px-4 mb-2 rounded-full text-white" onClick={(e) => openCity(e, 'London')} id="defaultOpen">
      <div className="bg-[#beb3e5] flex justify-center transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
              <h2 className="font-georgia text-5xl font-bold text-center text-black">London</h2>
            </div>
      </button>
      <button className="tablinks block bg-gray-300 w-full py-2 px-4 mb-2" onClick={(e) => openCity(e, 'Paris')}>
      <div className="bg-[#beb3e5] flex justify-center transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
              <h2 className="font-georgia text-5xl font-bold text-center text-black">London</h2>
            </div>
      </button>
      <button className="tablinks block bg-gray-300 w-full py-2 px-4 mb-2" onClick={(e) => openCity(e, 'Tokyo')}>
      <div className="bg-[#beb3e5] flex justify-center transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
              <h2 className="font-georgia text-5xl font-bold text-center text-black">London</h2>
            </div>
      </button>
    </div>

    {/* Tab content */}
    <div className="w-3/4 p-4">
      {/* Assuming City is a component rendering the content */}
      <City id="London" title="London" description="London is the capital city of England." />
      <City id="Paris" title="Paris" description="Paris is the capital of France." />
      <City id="Tokyo" title="Tokyo" description="Tokyo is the capital of Japan." />
    </div>
  </div>
</div>
    </div>


  )  
};

export default Tabs;
