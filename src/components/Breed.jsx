import React from 'react';
import './Breed.scss';

export const Breed = ({ item, handleClick }) => {
  return (
    <p onClick={handleClick} className='breed'>
      {item}
    </p>
  );
};
