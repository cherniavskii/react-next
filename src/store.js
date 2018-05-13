import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from './rootReducer';
import logic from '../services/logic';
import httpClient from '../services/httpClient';

export default function (initialState = {}) {
  const logicMiddleware = createLogicMiddleware(logic, { httpClient });

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools((
      applyMiddleware((
        logicMiddleware
      ))
    )),
  );

  store.logicMiddleware = logicMiddleware;

  return store;
}
