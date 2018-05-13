/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import createStore from './store';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

// https://github.com/iliakan/detect-node
const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

const getOrCreateStore = (initStore, initialState) => {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
};

export default (...connectArgs) => (Component) => {
  const ComponentWithRedux = (props = {}) => {
    const { store, initialProps, initialState } = props;

    // Connect page to redux with connect arguments
    const ConnectedComponent = connect(...connectArgs)(Component);

    // Wrap with redux Provider with store
    // Create connected page with initialProps
    return React.createElement(
      Provider,
      { store: store && store.dispatch ? store : getOrCreateStore(createStore, initialState) },
      React.createElement(ConnectedComponent, initialProps),
    );
  };

  ComponentWithRedux.getInitialProps = async (props = {}) => {
    const isServer = checkServer();
    const store = getOrCreateStore(createStore);

    // Run page getInitialProps with store and isServer
    const initialProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...props, isServer, store })
      : {};

    return store.logicMiddleware.whenComplete(() => {
      return {
        store,
        initialState: store.getState(),
        initialProps,
      };
    });
  };

  ComponentWithRedux.propTypes = {
    store: PropTypes.shape().isRequired,
    initialProps: PropTypes.shape({}).isRequired,
    initialState: PropTypes.shape({}).isRequired,
  };

  return ComponentWithRedux;
};
