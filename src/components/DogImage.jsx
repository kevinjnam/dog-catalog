import React from 'react';
import './DogImage.scss';

export const DogImage = ({ url, breed, handleClick }) => {
  return (
    <img
      className='dog-image'
      onClick={handleClick}
      src={url}
      alt={`${breed}`}
    />
  );
};
