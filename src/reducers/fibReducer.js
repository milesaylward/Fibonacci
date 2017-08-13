import {
  GET_FIBONACCI_ARRAY,
  FIB_SPEEDS
} from '../actions/types';

const INITIAL_STATE = {
  fibArray: null,
  fibSpeeds: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FIBONACCI_ARRAY:
      return { fibArray: action.payload };
    case FIB_SPEEDS:
      return { fibSpeeds: action.payload };
    default:
      return state;
  }
}
