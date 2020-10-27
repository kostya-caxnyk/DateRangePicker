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

const selectDay = (date, isChoseStartRange) => {
  if (!isChoseStartRange) {
    return {
      type: 'SELECTED_START_RANGE',
      payload: date,
    };
  }
  return {
    type: 'SELECTED_END_RANGE',
    payload: date,
  };
};

const hoverDays = (date) => {
  return {
    type: 'HOVERING_RANGE',
    payload: date,
  }
}

export { changeDate, selectDay, hoverDays };
