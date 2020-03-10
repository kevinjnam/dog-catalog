import React from 'react';
import './Divider.scss';

export const Divider = ({ item }) => {
  const name = item[0].toUpperCase() + item.slice(1);
  return <div className='divider'>{name}</div>;
};
