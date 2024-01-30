// Import React and any other required modules
import React, { MouseEvent, useEffect } from 'react';

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
    <div>
      <h2 className="text-2xl font-bold">Vertical Tabs</h2>
      <p>Click on the buttons inside the tabbed menu:</p>

      {/* Tab */}
      <div className="flex">
        {/* Buttons */}
        <div className="w-1/4 bg-gray-200 p-4 flex flex-col">
  <button className="tablinks" onClick={(e) => openCity(e, 'London')} id="defaultOpen">
    London
  </button>
  </div>
  <div className="w-1/4 bg-gray-200 p-4 flex flex-col">
  <button className="tablinks" onClick={(e) => openCity(e, 'Paris')}>
    Paris
  </button>
  </div>
  <button className="tablinks" onClick={(e) => openCity(e, 'Tokyo')}>
    Tokyo
  </button>



        {/* Tab content */}
        <div className="w-3/4 p-4">
          <City id="London" title="London" description="London is the capital city of England." />
          <City id="Paris" title="Paris" description="Paris is the capital of France." />
          <City id="Tokyo" title="Tokyo" description="Tokyo is the capital of Japan." />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
