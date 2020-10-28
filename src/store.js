import { createStore } from 'redux';

import reducer from './reducers';

const date = new Date();

const dateOne = {
  year: date.getFullYear(),
  month: date.getMonth(),
};

date.setMonth(date.getMonth() + 1);

const dateTwo = {
  year: date.getFullYear(),
  month: date.getMonth(),
};

const initialState = {
  dateInCalendars: {
    leftMonth: dateOne,
    rightMonth: dateTwo,
  },
  selectedRange: {
    from: {},
    to: {},
  },
  hoveredRange: {
    from: {},
    to: {},
  },
  isChoseStartRange: false,
};

const store = createStore(reducer, initialState);

export default store;
