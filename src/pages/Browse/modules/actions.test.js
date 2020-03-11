import {
  fetchBreedsFailed,
  fetchBreedsSuccessful,
  fetchBreedsStarted,
  fetchSelectedStarted,
  fetchSelectedFailed,
  fetchSelectedSuccessful
} from './actions';

test('fetchBreeds', () => {
  const failedResult = fetchBreedsFailed();
  const startedResult = fetchBreedsStarted();
  const successfulResult = fetchBreedsSuccessful();

  expect(startedResult.type).toEqual('FETCH_BREEDS_START');
  expect(failedResult.type).toEqual('FETCH_BREEDS_FAILED');
  expect(successfulResult.type).toEqual('FETCH_BREEDS_SUCCESSFUL');
});

test('fetchSelected', () => {
  const failedResult = fetchSelectedFailed();
  const startedResult = fetchSelectedStarted();
  const successfulResult = fetchSelectedSuccessful();

  expect(startedResult.type).toEqual('FETCH_SELECTED_START');
  expect(failedResult.type).toEqual('FETCH_SELECTED_FAILED');
  expect(successfulResult.type).toEqual('FETCH_SELECTED_SUCCESSFUL');
});
