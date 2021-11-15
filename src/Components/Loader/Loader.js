import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="spinner">
      <div className="spinner__border">
        <div className="spinner__core"></div>
      </div>  
    </div>
  );
}

export default Loader;