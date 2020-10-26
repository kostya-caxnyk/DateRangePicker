const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return {
        ...state,
        dateInCalendars: action.payload,
      };
    case 'SELECTED_DAY':
      return {
        ...state,
        selectedRange: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
