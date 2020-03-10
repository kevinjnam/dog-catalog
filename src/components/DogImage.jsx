import React from 'react';
import './DogImage.scss';

export const DogImage = ({ url, breed }) => {
  return <img className='dog-image' src={url} alt={`${breed}`} />;
};
