import React from 'react';

import { connect } from 'react-redux';

import Calendar from '../components/Calendar';
import calculateDaysInCalendar from '../functions/calculateDaysInCalendar';
import calculatingRange from '../functions/calculatingRange';

import { onSelectDay, onHoverDays, stopSelection, onMouseDown } from '../actions';

const CalendarContainer = ({
  month,
  onSelectDay,
  isChoseStartRange,
  onHoverDays,
  selectedRange,
  hoveredRange,
  isMouseDown,
  stopSelection,
  onMouseDown,
}) => {
  const monthAndYearLabel = ({ year, month }) => {
    const date = new Date(year, month);
    const dateString = date.toString().split(' ');
    return `${dateString[1]} ${dateString[3]}`;
  };

  const handleClick = (date) => () => {
    onSelectDay(date, isChoseStartRange);
  };

  const handleMouseEnter = (date) => () => {
    if (!isChoseStartRange) {
      return;
    }
    onHoverDays(date);
  };

  const handleMouseDown = (date) => () => {
    if (isChoseStartRange) {
      return;
    }
    onMouseDown(date, isMouseDown);
  };

  const handleMouseMove = (date) => () => {
    if (!isMouseDown) {
      return;
    }
    onSelectDay(date, isMouseDown);
  };

  const handleMouseUp = () => {
    if (isChoseStartRange) {
      return;
    }
    stopSelection();
  };

  const selectedRangeArr = calculatingRange(selectedRange);
  const hoveredRangeArr = calculatingRange(hoveredRange, true);
  const days = calculateDaysInCalendar(month, selectedRangeArr, hoveredRangeArr);

  return (
    <Calendar
      monthAndYear={monthAndYearLabel(month)}
      days={days}
      handleClick={handleClick}
      handleMouseEnter={handleMouseEnter}
      handleMouseDown={handleMouseDown}
      handleMouseMove={handleMouseMove}
      handleMouseUp={handleMouseUp}
    />
  );
};

const mapStateToProps = ({ selectedRange, hoveredRange, isChoseStartRange, isMouseDown }) => {
  return {
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
    stopSelection,
    onMouseDown,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CalendarContainer);
