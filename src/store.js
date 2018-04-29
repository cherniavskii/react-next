import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

export default function (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(),
  );
}
