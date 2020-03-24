import React from 'react';
import './DogDetailPane.scss';

export const DogDetailPane = ({ breed, url }) => {
  return (
    <div className='dog-detail-pane'>
      <img src={url} alt={breed} />
      <h2>{breed}</h2>
      <h4>{url}</h4>
    </div>
  );
};
