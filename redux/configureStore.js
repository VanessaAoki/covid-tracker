import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducer from './main/main';
import dataReducerCountry from './main/country';

const reducer = combineReducers({
  data: dataReducer,
  country: dataReducerCountry,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
