import { fromJS } from 'immutable';
import {
  RECEIVE_RATE,
  FORM_SET_BASE,
  FORM_SET_QUOTE,
  FORM_SET_AMOUNT,
} from './constants';


const initialState = fromJS({
  form: {
    base: '',
    quote: '',
    amount: '',
  },
  fetch: {},
});

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_RATE:
      return state.set('fetch', fromJS(action.payload));
    case FORM_SET_BASE:
      return state.setIn(['form', 'base'], action.payload);
    case FORM_SET_QUOTE:
      return state.setIn(['form', 'quote'], action.payload);
    case FORM_SET_AMOUNT:
      return state.setIn(['form', 'amount'], action.payload);
    default:
      return state;
  }
}
