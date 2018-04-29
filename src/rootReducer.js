import { combineReducers } from 'redux';

import counter, { name as counterName } from '../ducks/counter';

export default combineReducers({
  [counterName]: counter,
});

