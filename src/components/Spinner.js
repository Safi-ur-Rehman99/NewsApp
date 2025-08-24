import React from 'react';
import loading from './loading.gif';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img 
        src={loading} 
        alt="Loading news articles..." 
        className="spinner-image"
      />
    </div>
  );
};
export default Spinner;
