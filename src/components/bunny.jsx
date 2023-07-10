import React from 'react';
import github from './icons/github.png';

const bunny = () => {
  return (
    <div className="relative">
      <img
        src={github}
        alt="bunny"
        className="transform translate-x-100 transition-transform duration-500"
      />
    </div>
  );
};

export default bunny;