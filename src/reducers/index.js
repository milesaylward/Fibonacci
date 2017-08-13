import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import FibReducer from './fibReducer';

const rootReducer = combineReducers({
  fibNumbers: FibReducer,
  routing: routerReducer
});

export default rootReducer;
