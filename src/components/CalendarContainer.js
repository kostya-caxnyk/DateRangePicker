import React from 'react';

import Calendar from './Calendar';
import calculateDaysInCalendar from '../functions/calculateDaysInCalendar';

const CalendarContainer = ({
  year,
  month,
  onSelectDay,
  from,
  to,
  today,
  isChoseStartRange,
  onHoverDays,
  toDateHovered,
}) => {
  const monthAndYear = (year, month) => {
    const date = new Date(year, month);
    const dateString = date.toString().split(' ');
    return `${dateString[1]} ${dateString[3]}`;
  };

  const selectedRange = (from, to) => {
    if (to.year === undefined) {
      to = toDateHovered;
    }

    const range = [];

    if (!from.year) {
      return range;
    }

    if (from.year && to.year === undefined) {
      range.push({ year: from.year, month: from.month, day: from.day });
      return range;
    }
    const fromDate = new Date(from.year, from.month, from.day);
    const toDate = new Date(to.year, to.month, to.day);

    if (fromDate > toDate) {
      let temp = from;
      from = to;
      to = temp;
    }

    let date = new Date(from.year, from.month, from.day);
    let year, month, day;
    do {
      year = date.getFullYear();
      month = date.getMonth();
      day = date.getDate();
      range.push({ year, month, day });
      date = new Date(year, month, day + 1);
    } while (!(day === to.day && month === to.month && year === to.year));

    return range;
  };

  const range = selectedRange(from, to);

  const isInSelectedRange = (date) => {
    const idx = range.findIndex(
      ({ year, month, day }) => year === date.year && month === date.month && day === date.day,
    );

    if (date.year === from.year && date.month === from.month && date.day === from.day) {
      return 'selected';
    }

    if (to.year === undefined) {
      return idx < 0 ? '' : 'hovered';
    }
    return idx < 0 ? '' : 'selected';
  };

  const isToday = (today, dateInArr) => {
    if (
      today.year === dateInArr.year &&
      today.month === dateInArr.month &&
      today.day === dateInArr.day
    ) {
      return 'today';
    }
    return '';
  };

  return (
    <Calendar
      monthAndYear={monthAndYear(year, month)}
      days={calculateDaysInCalendar(year, month)}
      onSelectDay={onSelectDay}
      today={today}
      isChoseStartRange={isChoseStartRange}
      isToday={isToday}
      isInSelectedRange={isInSelectedRange}
      onHoverDays={onHoverDays}
    />
  );
};

export default CalendarContainer;
