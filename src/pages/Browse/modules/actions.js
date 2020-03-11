import {
  FETCH_BREEDS_FAILED,
  FETCH_BREEDS_START,
  FETCH_BREEDS_SUCCESSFUL,
  FETCH_SELECTED_START,
  FETCH_SELECTED_FAILED,
  FETCH_SELECTED_SUCCESSFUL
} from './constants';

export const fetchBreedsStarted = () => ({ type: FETCH_BREEDS_START });
export const fetchBreedsSuccessful = breedsData => ({
  type: FETCH_BREEDS_SUCCESSFUL,
  breedsList: breedsData
});
export const fetchBreedsFailed = error => ({
  type: FETCH_BREEDS_FAILED,
  error
});

export const fetchBreeds = () => {
  return (dispatch, getState) => {
    dispatch(fetchBreedsStarted());
    return fetch('/breeds')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchBreedsSuccessful(data.breedsList));
      })
      .catch(error => {
        dispatch(fetchBreedsFailed(error));
      });
  };
};

export const fetchSelectedStarted = () => ({ type: FETCH_SELECTED_START });
export const fetchSelectedSuccessful = selectedList => ({
  type: FETCH_SELECTED_SUCCESSFUL,
  selectedList
});
export const fetchSelectedFailed = error => ({
  type: FETCH_SELECTED_FAILED,
  error
});

export const searchSelectedBreeds = selectedList => {
  return (dispatch, getState) => {
    if (selectedList.length < 1) {
      return;
    }
    dispatch(fetchSelectedStarted());
    const data = { selectedList };
    fetch('/breeds/selected', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(fetchSelectedSuccessful(data.images));
      })
      .catch(error => {
        dispatch(fetchSelectedFailed(error));
      });
  };
};
