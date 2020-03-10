import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreedsList } from './modules/selectors';
import { fetchBreeds, searchSelectedBreeds } from './modules/actions';
import './Browse.scss';

import { DogBreedSelector } from './containers/DogBreedSelector';
import { DogListContainer } from './containers/DogListContainer';

export const Browse = () => {
  const allBreedsList = useSelector(getBreedsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  return (
    <div className='browse'>
      <DogBreedSelector
        breedsList={allBreedsList}
        performSearch={selectedList =>
          dispatch(searchSelectedBreeds(selectedList))
        }
      />
      <DogListContainer />
    </div>
  );
};
