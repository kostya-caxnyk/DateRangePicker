const changeDate = (newYear, newMonth) => {
  const newDate = new Date(newYear, newMonth);

  const selectedMonth = {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
  };

  newDate.setMonth(newDate.getMonth() + 1);

  const nextMonth = {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
  };

  return {
    type: 'CHANGE_DATE',
    payload: {
      selectedMonth,
      nextMonth,
    },
  };
};

const selectDay = (date) => {
  return {
    type: 'SELECTED_DAY',
    payload: {
      fromDate: date,
      toDate: null,
    },
  };
};

export { changeDate, selectDay };
