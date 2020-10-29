const changeDate = (newYear, newMonth) => {
  const newDate = new Date(newYear, newMonth);

  const leftMonth = {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
  };

  newDate.setMonth(newDate.getMonth() + 1);

  const rightMonth = {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
  };

  return {
    type: 'CHANGE_DATE',
    payload: {
      leftMonth,
      rightMonth,
    },
  };
};

const onSelectDay = (date, isChoseStartRange) => {
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

const onHoverDays = (date) => {
  return {
    type: 'HOVERING_RANGE',
    payload: date,
  };
};

const stopSelection = () => ({
  type: 'STOP_SELECTION',
});

const continueSelection = () => ({
  type: 'CONTINUE_SELECTION',
});

const removeHoveredRange = () => ({
  type: 'REMOVE_HOVERED_RANGE',
});

const hoverAllDays = (from, to) => ({
  type: 'HOVERING_ALL_DAYS',
  payload: {
    from,
    to,
  },
});

const setSelectionRange = ({ from, to }) => {
  return {
    type: 'SET_SELECTION_RANGE',
    payload: {
      from,
      to,
    },
  };
};

const onMouseDown = (date, isMouseDown) => {
  if (!isMouseDown) {
    return {
      type: 'START_SELECTING',
      payload: date,
    };
  }
  return {
    type: 'SELECTED_END_RANGE',
    payload: date,
  };
};

export {
  changeDate,
  onSelectDay,
  onHoverDays,
  stopSelection,
  continueSelection,
  removeHoveredRange,
  hoverAllDays,
  setSelectionRange,
  onMouseDown,
};
