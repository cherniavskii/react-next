export const name = 'counter';

const getState = state => state[name];

/*
 * TYPES
 */

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

/*
 * ACTION CREATORS
 */

const add = () => ({
  type: ADD,
});

const subtract = () => ({
  type: SUBTRACT,
});

const reset = () => ({
  type: RESET,
});

/*
 * REDUCER
 */

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + 1,
      };
    case SUBTRACT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...initialState,
      };

    default: return state;
  }
};

/*
 * SELECTORS
 */

const getCount = state => getState(state).count;

/*
 * EXPORTS
 */

export default reducer;

export const types = {
  ADD,
  SUBTRACT,
  RESET,
};

export const actions = {
  add,
  subtract,
  reset,
};


export const selectors = {
  getCount,
};

