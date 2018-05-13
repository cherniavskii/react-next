import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from './rootReducer';
import logic from '../services/logic';

export default function (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools((
      applyMiddleware((
        createLogicMiddleware(logic, {})
      ))
    )),
  );
}
