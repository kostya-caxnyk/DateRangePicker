import React from 'react';

import Calendar from './Calendar';
import calculateDaysInCalendar from '../functions/calculateDaysInCalendar';

const CalendarContainer = ({ year, month, onSelectDay }) => {

  const date = new Date(year, month);
  const dateString = date.toString().split(' ');
  const monthAndYear = `${dateString[1]} ${dateString[3]}`;
  
  return <Calendar monthAndYear={monthAndYear} days={calculateDaysInCalendar(year, month)} onSelectDay={onSelectDay}/>;
};

export default CalendarContainer;
