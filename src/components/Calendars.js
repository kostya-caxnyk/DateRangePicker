import React from 'react';

import { connect } from 'react-redux';

import { onSelectDay, onHoverDays, removeHoveredRange } from '../actions';

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
  } = props;
  return (
    <div className="calendars">
      <CalendarContainer
        month={leftMonth}
        onSelectDay={onSelectDay}
        isChoseStartRange={isChoseStartRange}
        onHoverDays={onHoverDays}
        selectedRange={selectedRange}
        hoveredRange={hoveredRange}
        onRemoveHoveredRange={onRemoveHoveredRange}
      />
      <CalendarContainer
        month={rightMonth}
        onSelectDay={onSelectDay}
        isChoseStartRange={isChoseStartRange}
        onHoverDays={onHoverDays}
        selectedRange={selectedRange}
        hoveredRange={hoveredRange}
        onRemoveHoveredRange={onRemoveHoveredRange}
      />
    </div>
  );
};

const mapStateToProps = ({
  dateInCalendars: { leftMonth, rightMonth },
  selectedRange,
  hoveredRange,
  isChoseStartRange,
}) => {
  return {
    leftMonth,
    rightMonth,
    selectedRange,
    hoveredRange,
    isChoseStartRange,
  };
};

const mapDispatchToProps = () => {
  return {
    onSelectDay,
    onHoverDays,
    onRemoveHoveredRange: removeHoveredRange,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Calendars);
