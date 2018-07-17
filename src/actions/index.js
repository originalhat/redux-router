const makeFetch = (fetchType) => {

  return fetch(`https://jsonplaceholder.typicode.com/${fetchType}`);
};

export function fetchThings(fetchType) {
  return function (dispatch) {
    return makeFetch(fetchType).then(
      response => response.json().then(data => dispatch(fetchThingsSuccess(data))),
      error => dispatch(fetchThingsError(error))
    );
  };
}

export function fetchThingsSuccess(data) {
  return {
    type: 'FETCH_THINGS_SUCCESS',
    data
  };
}

export function fetchThingsError(error) {
  return {
    type: 'FETCH_THINGS_ERROR',
    error
  };
}