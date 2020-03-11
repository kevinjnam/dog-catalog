import reducers from '../../../globals/index';

//test default reducer
test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    dogs: {
      allBreedsList: [],
      selectedImages: [],
      isLoadingBreeds: false,
      isLoadingSelected: false,
      error: null
    }
  });
});

test('FETCH_BREEDS_START correctly changes state', () => {
  //given
  const state = reducers(undefined, { type: 'INIT' });
  //when
  const newState = reducers(state, { type: 'FETCH_BREEDS_START' });
  //then
  expect(newState.dogs.isLoadingBreeds).toBe(true);
});

test('FETCH_BREEDS_START correctly changes state', () => {
  //given
  const state = reducers(undefined, { type: 'INIT' });
  //when
  const newState = reducers(state, { type: 'FETCH_SELECTED_START' });
  //then
  expect(newState.dogs.isLoadingSelected).toBe(true);
});

test('FETCH_BREEDS_FAILED correctly changes state', () => {
  //given
  const state = reducers(undefined, { type: 'INIT' });
  //when
  const errorMsg = 'ERROR';
  const newState = reducers(state, {
    type: 'FETCH_BREEDS_FAILED',
    error: errorMsg
  });
  //then
  expect(newState.dogs.error).toBe(errorMsg);
});

test('FETCH_SELECTED_FAILED correctly changes state', () => {
  //given
  const state = reducers(undefined, { type: 'INIT' });
  //when
  const errorMsg = 'ERROR';
  const newState = reducers(state, {
    type: 'FETCH_SELECTED_FAILED',
    error: errorMsg
  });
  //then
  expect(newState.dogs.error).toBe(errorMsg);
});
