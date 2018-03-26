import { createStore, applyMiddleware } from 'redux';
import { queryMiddleware } from 'redux-query';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers, { getQueries, getEntities } from 'reducers';
// import { authTokenMiddleware } from 'middlewares';

export default () => {
  let middlewares = [
    // authTokenMiddleware,
    queryMiddleware(getQueries, getEntities),
  ];

  const composeEnhancers = composeWithDevTools({ realtime: true });

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
  }

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};
