import React from 'react';

import { connect } from 'react-redux';

import {
  onSelectDay,
  onHoverDays,
  removeHoveredRange,
  stopSelection,
  onMouseDown,
} from '../actions';

import CalendarContainer from '../containers/CalendarContainer';

const Calendars = (props) => {
  const {
    leftMonth,
    rightMonth,
    onSelectDay,
    onHoverDays,
    isChoseStartRange,
    hoveredRange,
    selectedRange,
    onRemoveHoveredRange,
    isMouseDown,
    stopSelection,
    onMouseDown,
  } = props;
  return (
    <div className="calendars" onMouseLeave={onRemoveHoveredRange}>
      <CalendarContainer
        month={leftMonth}
        onSelectDay={onSelectDay}
        isChoseStartRange={isChoseStartRange}
        onHoverDays={onHoverDays}
        selectedRange={selectedRange}
        hoveredRange={hoveredRange}
        onRemoveHoveredRange={onRemoveHoveredRange}
        isMouseDown={isMouseDown}
        stopSelection={stopSelection}
        onMouseDown={onMouseDown}
      />
      <CalendarContainer
        month={rightMonth}
        onSelectDay={onSelectDay}
        isChoseStartRange={isChoseStartRange}
        onHoverDays={onHoverDays}
        selectedRange={selectedRange}
        hoveredRange={hoveredRange}
        onRemoveHoveredRange={onRemoveHoveredRange}
        isMouseDown={isMouseDown}
        stopSelection={stopSelection}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

const mapStateToProps = ({
  dateInCalendars: { leftMonth, rightMonth },
  selectedRange,
  hoveredRange,
  isChoseStartRange,
  isMouseDown,
}) => {
  return {
    leftMonth,
    rightMonth,
    selectedRange,
    hoveredRange,
    isChoseStartRange,
    isMouseDown,
  };
};

const mapDispatchToProps = () => {
  return {
    onSelectDay,
    onHoverDays,
    onRemoveHoveredRange: removeHoveredRange,
    stopSelection,
    onMouseDown,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Calendars);
