const reducer = (state, action) => {
  console.log(state);

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
