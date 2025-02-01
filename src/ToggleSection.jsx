import React, { useState } from 'react';

const ToggleSection = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState(title);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setButtonText(isVisible ? title : 'Show Less');
  };

  return (
    <div className="section">
      <button className="toggle-section" onClick={toggleVisibility}>
        {buttonText}
      </button>
      <div className={`content ${isVisible ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ToggleSection;