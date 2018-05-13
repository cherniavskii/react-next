import { createLogic } from 'redux-logic';

export const name = 'movies';
const prefix = `${name}/`;

const getState = state => state[name];

/*
 * TYPES
 */
const FETCH_MOVIES = `${prefix}FETCH_MOVIES`;
const FETCH_MOVIES_SUCCESS = `${prefix}FETCH_MOVIES_SUCCESS`;
const FETCH_MOVIES_CANCEL = `${prefix}FETCH_MOVIES_CANCEL`;

/*
 * ACTIONS
 */

const fetchMovies = options => ({
  type: FETCH_MOVIES,
  payload: {
    url: 'http://localhost:3003/movies',
    method: 'get',
    ...options,
  },
});

const fetchMoviesSuccess = data => ({
  type: FETCH_MOVIES_SUCCESS,
  data,
});

const fetchMoviesCancel = () => ({
  type: FETCH_MOVIES_CANCEL,
});

/*
 * REDUCER
 */

const reducer = (state = [], action) => {
  const actions = {
    [FETCH_MOVIES_SUCCESS]: () =>
      action.data,
  };

  return (actions[action.type] && actions[action.type]()) || state;
};

/*
 * LOGIC
 */

const fetchMoviesLogic = createLogic({
  type: FETCH_MOVIES,
  cancelType: [FETCH_MOVIES_CANCEL],
  latest: true,
  process({ action: { payload }, httpClient }) {
    return httpClient.get(payload.url)
      .then(({ data }) => fetchMoviesSuccess(data));
  },
});

/*
 * SELECTORS
 */

const getMovies = state => getState(state);


/*
 * EXPORTS
 */

export default reducer;

export const actions = {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesCancel,
};

export const types = {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_CANCEL,
};

export const logic = [
  fetchMoviesLogic,
];

export const selectors = {
  getMovies,
};
