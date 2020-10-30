import React from 'react';

import { connect } from 'react-redux';

import { removeHoveredRange } from '../actions';

import CalendarContainer from '../containers/CalendarContainer';

const Calendars = ({ leftMonth, rightMonth, onRemoveHoveredRange }) => {
  return (
    <div className="calendars" onMouseLeave={onRemoveHoveredRange}>
      <CalendarContainer month={leftMonth} />
      <CalendarContainer month={rightMonth} />
    </div>
  );
};

const mapStateToProps = ({ dateInCalendars: { leftMonth, rightMonth } }) => {
  return {
    leftMonth,
    rightMonth,
  };
};

const mapDispatchToProps = () => {
  return {
    onRemoveHoveredRange: removeHoveredRange,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Calendars);
