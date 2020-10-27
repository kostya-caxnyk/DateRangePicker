const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return {
        ...state,
        dateInCalendars: action.payload,
      };
    case 'SELECTED_START_RANGE':
      return {
        ...state,
        selectedRange: {
          fromDate: action.payload,
          toDateHovered: {},
          toDate: {},
        },
        isChoseStartRange: true,
      };
    case 'SELECTED_END_RANGE':
      return {
        ...state,
        selectedRange: {
          ...state.selectedRange,
          toDate: action.payload,
        },
        isChoseStartRange: false,
      };
    case 'HOVERING_RANGE':
      return {
        ...state,
        selectedRange: {
          ...state.selectedRange,
          toDateHovered: action.payload,
        }
      }
    default:
      return state;
  }
};

export default reducer;
