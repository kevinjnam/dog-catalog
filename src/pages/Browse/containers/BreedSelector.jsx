import React from 'react';
import { Breed } from '../../../components/Breed';
import './BreedSelector.scss';

export const BreedSelector = ({ selected, list, selectBreed }) => {
  const style = selected ? 'selected' : '';
  const listJSX = list.map(list => (
    <Breed handleClick={() => selectBreed(list)} key={list} item={list} />
  ));
  return <div className={`breed-selector ${style}`}>{listJSX}</div>;
};
