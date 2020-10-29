import React from 'react';

import Calendar from '../components/Calendar';
import calculateDaysInCalendar from '../functions/calculateDaysInCalendar';
import calculatingRange from '../functions/calculatingRange';

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

  const selectedRangeArr = calculatingRange(selectedRange);
  const hoveredRangeArr = calculatingRange(hoveredRange, true);
  const days = calculateDaysInCalendar(month, selectedRangeArr, hoveredRangeArr);

  return (
    <Calendar
      monthAndYear={monthAndYearLabel(month)}
      days={days}
      onSelectDay={onSelectDay}
      isChoseStartRange={isChoseStartRange}
      onHoverDays={onHoverDays}
      isMouseDown={isMouseDown}
      stopSelection={stopSelection}
      onMouseDown={onMouseDown}
    />
  );
};

export default CalendarContainer;
