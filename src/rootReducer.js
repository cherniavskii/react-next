import { combineReducers } from 'redux';

import counter, { name as counterName } from '../ducks/counter';
import movies, { name as moviesName } from '../ducks/movies';

export default combineReducers({
  [counterName]: counter,
  [moviesName]: movies,
});

