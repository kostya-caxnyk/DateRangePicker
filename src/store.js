import { createStore } from 'redux';

import reducer from './reducers';

let date = new Date();

const dateOne = {
  year: date.getFullYear(),
  month: date.getMonth(),
};

const from = {
  year: dateOne.year,
  month: dateOne.month,
  day: date.getDate(),
};

date.setMonth(date.getMonth() + 1);

const dateTwo = {
  year: date.getFullYear(),
  month: date.getMonth(),
};

date = new Date(from.year, from.month, from.day + 7);

const to = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
};

const initialState = {
  dateInCalendars: {
    leftMonth: dateOne,
    rightMonth: dateTwo,
  },
  selectedRange: {
    from,
    to,
  },
  hoveredRange: {
    from: {},
    to: {},
  },
  isChoseStartRange: false,
  isMouseDown: false,
};

const store = createStore(reducer, initialState);

export default store;
