import {
  FETCH_BREEDS_FAILED,
  FETCH_BREEDS_START,
  FETCH_BREEDS_SUCCESSFUL,
  FETCH_SELECTED_START,
  FETCH_SELECTED_FAILED,
  FETCH_SELECTED_SUCCESSFUL,
  SELECT_DOG
} from './constants';

const initialState = {
  allBreedsList: [],
  selectedImages: [],
  currentDog: {
    breed: '',
    url: ''
  },
  isLoadingBreeds: false,
  isLoadingSelected: false,
  error: null
};

export const dogs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREEDS_START:
      return {
        ...state,
        isLoadingBreeds: true
      };
    case FETCH_BREEDS_FAILED:
      return {
        ...state,
        isLoadingBreeds: false,
        error: action.error
      };
    case FETCH_BREEDS_SUCCESSFUL:
      return {
        ...state,
        isLoadingBreeds: false,
        allBreedsList: action.breedsList
      };
    case FETCH_SELECTED_START:
      return {
        ...state,
        isLoadingSelected: true
      };
    case FETCH_SELECTED_FAILED:
      return {
        ...state,
        isLoadingSelected: false,
        error: action.error
      };
    case FETCH_SELECTED_SUCCESSFUL:
      return {
        ...state,
        isLoadingSelected: false,
        selectedImages: action.selectedList
      };
    case SELECT_DOG:
      return {
        ...state,
        currentDog: action.dog
      };
    default:
      return state;
  }
};
