import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedsList,
  getIsLoadingSelected,
  getCurrentDog
} from './modules/selectors';
import { fetchBreeds, searchSelectedBreeds } from './modules/actions';
import './Browse.scss';

import { DogBreedSelector } from './containers/DogBreedSelector';
import { DogListContainer } from './containers/DogListContainer';
import { DogDetailPane } from './containers/DogDetailPane';

export const Browse = () => {
  const allBreedsList = useSelector(getBreedsList);
  const isLoadingSelected = useSelector(getIsLoadingSelected);
  const currentDog = useSelector(getCurrentDog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  return (
    <div className='browse'>
      <DogBreedSelector
        isLoading={isLoadingSelected}
        breedsList={allBreedsList}
        performSearch={selectedList =>
          dispatch(searchSelectedBreeds(selectedList))
        }
      />
      <div>
        {currentDog.breed && (
          <DogDetailPane breed={currentDog.breed} url={currentDog.url} />
        )}
        <DogListContainer />
      </div>
    </div>
  );
};
