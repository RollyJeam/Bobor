import React from 'react';

const OpenPDF = () => {
  const handleOpenPDF = () => {
    window.open(`${window.location.origin}/Resume.pdf`, '_blank'); 
  };

  return (
    <div 
      onClick={handleOpenPDF} >
      Print Resume
    </div>
  );
};

export default OpenPDF;