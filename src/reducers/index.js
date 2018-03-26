import { combineReducers } from 'redux-immutable';
import { entitiesReducer, queriesReducer } from 'redux-query';
import Immutable from 'immutable';

// import { reducer as form } from 'redux-form';
// import { reducers as apiHOCs } from 'components/apiHOCs';

export const getQueries = state => state.get('queries');
export const getEntities = state => state.get('entities');

const wrappedQueriesReducer = (state = Immutable.Map(), action) =>
  Immutable.fromJS(queriesReducer(state.toJS(), action));

const wrappedEntitiesReducer = (state = Immutable.Map(), action) =>
  Immutable.fromJS(entitiesReducer(state.toJS(), action));

export default combineReducers({
  // form,
  entities: wrappedEntitiesReducer,
  queries: wrappedQueriesReducer,
});
