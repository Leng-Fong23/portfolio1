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
      <Paper style={{ display: 'flex' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        {/* Add more tabs as needed */}
      </Tabs>

      {/* Add tab contents here based on the selected tab index (value) */}
      <div>
        {value === 0 && <div>Content for Tab 1</div>}
        {value === 1 && <div>Content for Tab 2</div>}
        {/* Add more tab contents as needed */}
      </div>
    </Paper>
  );
};

export default Tabs;
