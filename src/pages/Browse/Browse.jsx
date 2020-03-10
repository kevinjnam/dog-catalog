import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreedsList } from './modules/selectors';
import './Browse.scss';
import './DogBreedSelector.scss';
import './BreedSelector.scss';
import './DogListContainer.scss';
import './Breed.scss';

export const Browse = () => {
  // const allBreedsList = useSelector(getBreedsList);
  const [allBreedsList, setAllBreedsList] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        const breedsList = [];
        for (let breed in data.message) {
          breedsList.push(breed);
        }
        setAllBreedsList(breedsList);
      });
  }, []);

  return (
    <div className='browse'>
      <DogBreedSelector breedsList={allBreedsList} />
      <DogListContainer />
    </div>
  );
};

export const DogBreedSelector = ({ breedsList }) => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const notSelectedBreeds = [...breedsList].filter(
    breed => !selectedBreeds.includes(breed)
  );

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
      <div className='search'>Search</div>
    </div>
  );
};

export const BreedSelector = ({ selected, list, selectBreed }) => {
  const style = selected ? 'selected' : '';

  const listJSX = list.map(list => (
    <Breed handleClick={() => selectBreed(list)} key={list} item={list} />
  ));

  return <div className={`breed-selector ${style}`}>{listJSX}</div>;
};

export const Breed = ({ item, handleClick }) => {
  return (
    <p onClick={handleClick} className='breed'>
      {item}
    </p>
  );
};

export const DogListContainer = () => {
  return <div className='dog-list container'>Dog Cage</div>;
};
