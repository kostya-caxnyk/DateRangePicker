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
          from: action.payload,
          to: {},
        },
        hoveredRange: {
          from: action.payload,
          to: {},
        },
        isChoseStartRange: true,
      };
    case 'SELECTED_END_RANGE':
      return {
        ...state,
        selectedRange: {
          ...state.selectedRange,
          to: action.payload,
        },
        hoveredRange: {
          from: {},
          to: {},
        },
        isChoseStartRange: false,
      };
    case 'HOVERING_RANGE':
      return {
        ...state,
        hoveredRange: {
          ...state.hoveredRange,
          to: action.payload,
        },
      };
    case 'STOP_SELECTION':
      return {
        ...state,
        isChoseStartRange: false,
      };

    case 'CONTINUE_SELECTION':
      return {
        ...state,
        hoveredRange: {
          from: state.selectedRange.from,
          to: {},
        },
        isChoseStartRange: true,
      };
    case 'REMOVE_HOVERED_RANGE':
      return {
        ...state,
        hoveredRange: {
          from: state.hoveredRange.from,
          to: {},
        },
      };
    case 'HOVERING_ALL_DAYS':
      return {
        ...state,
        hoveredRange: action.payload,
      };
    case 'SET_SELECTION_RANGE':
      return {
        ...state,
        selectedRange: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
