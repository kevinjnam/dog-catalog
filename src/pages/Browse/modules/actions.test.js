import {
  fetchBreedsFailed,
  fetchBreedsSuccessful,
  fetchBreedsStarted,
  fetchSelectedStarted,
  fetchSelectedFailed,
  fetchSelectedSuccessful,
  fetchBreeds
} from './actions';

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

describe('fetchBreeds', () => {
  it('fetches posts', async () => {
    global.fetch = mockFetch({});
    const dispatch = jest.fn();
    await fetchBreeds()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'FETCH_BREEDS_START'
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: 'FETCH_BREEDS_SUCCESSFUL'
    });
  });

  it('handles errors', async () => {
    const error = { message: 'ERROR ALERT' };
    global.fetch = () => Promise.reject(error);
    const dispatch = jest.fn();
    await fetchBreeds()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'FETCH_BREEDS_START'
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: 'FETCH_BREEDS_FAILED',
      error: { message: 'ERROR ALERT' }
    });
  });
});

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
