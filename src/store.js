import { createStore } from 'redux';

import reducer from './reducers';

const date = new Date();

const today = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
};

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
  todayDate: today,
  dateInCalendars: {
    selectedMonth: dateOne,
    nextMonth: dateTwo,
  },
  selectedRange: {
    fromDate: {},
    toDate: {},
  },
};

const store = createStore(reducer, initialState);

export default store;
