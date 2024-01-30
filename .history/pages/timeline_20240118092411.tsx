import React from 'react';
import './Timeline.css'; // Import the generated CSS file from Tailwind

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      <div className="container left">
        <div className="content">
          <h2 className="text-white">2017</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.
          </p>
        </div>
      </div>
      {/* ... (repeat for other timeline entries) */}
    </div>
  );
};

export default Timeline;
