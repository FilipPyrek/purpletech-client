import {
  FETCH_RATE,
  FORM_SET_BASE,
  FORM_SET_QUOTE,
  FORM_SET_AMOUNT,
} from './constants';

export function fetchRate({ base, quote, amount }) {
  return {
    type: FETCH_RATE,
    payload: { base, quote, amount },
  };
}

export function setBase(base) {
  return {
    type: FORM_SET_BASE,
    payload: base,
  };
}

export function setQuote(quote) {
  return {
    type: FORM_SET_QUOTE,
    payload: quote,
  };
}

export function setAmount(amount) {
  return {
    type: FORM_SET_AMOUNT,
    payload: amount,
  };
}
