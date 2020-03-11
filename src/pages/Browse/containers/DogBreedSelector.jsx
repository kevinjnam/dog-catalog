import React, { useState } from 'react';
import { BreedSelector } from './BreedSelector';
import './DogBreedSelector.scss';

export const DogBreedSelector = ({ breedsList, performSearch }) => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const notSelectedBreeds = [...breedsList].filter(
    breed => !selectedBreeds.includes(breed)
  );
  //handle selecting dog breed
  const selectBreed = breed => {
    let newSelected = [...selectedBreeds];
    if (selectedBreeds.length > 0 && selectedBreeds.includes(breed)) {
      newSelected = newSelected.filter(
        selectedBreed => breed !== selectedBreed
      );
    } else {
      newSelected = [...newSelected, breed];
    }
    setSelectedBreeds(newSelected);
  };

  const handleSearch = () => {
    performSearch(selectedBreeds);
  };

  const handleClearAll = () => {
    setSelectedBreeds([]);
  };

  const handleSelectAll = () => {
    setSelectedBreeds(breedsList);
  };

  return (
    <div className='dog-breed-selector'>
      <h4> Your Selected Breeds:</h4>
      <BreedSelector
        selected={true}
        list={selectedBreeds}
        selectBreed={selectBreed}
      />
      <h4> Breed Choices: </h4>
      <BreedSelector
        selected={false}
        list={notSelectedBreeds}
        selectBreed={selectBreed}
      />
      <div className='search'>
        <div onClick={handleSelectAll}>Select All </div>
        <div onClick={handleSearch}> Search </div>
        <div onClick={handleClearAll}> Clear All</div>
      </div>
    </div>
  );
};
