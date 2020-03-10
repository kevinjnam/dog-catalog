import React from 'react';
import { useSelector } from 'react-redux';
import { getImages } from '../modules/selectors';
import { getBreedName } from '../../../globals/utility/utility';
import { Divider } from '../../../components/Divider';
import { DogImage } from '../../../components/DogImage';
import './DogListContainer.scss';

export const DogListContainer = () => {
  const images = useSelector(getImages);
  //if user has not searched for any breeds
  if (images.length < 1)
    return (
      <div className='empty'>
        <strong>Search for some dogs...</strong>
      </div>
    );
  let breedName = null;
  const imagesJSX = [];
  for (let i = images.length - 1; i >= 0; i--) {
    const url = images[i];
    const currentBreed = getBreedName(url);
    if (currentBreed !== breedName) {
      imagesJSX.push(<Divider key={currentBreed} item={currentBreed} />);
      breedName = currentBreed;
    }
    imagesJSX.push(<DogImage key={url} breed={currentBreed} url={url} />);
  }
  return <div className='dog-list-container'>{imagesJSX}</div>;
};
