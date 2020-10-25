import React from 'react';

import { connect } from 'react-redux';

import { selectDay } from '../actions';

import Calendar from './CalendarContainer';

const Calendars = (props) => {
  const { selectedMonth, nextMonth, selectDay } = props;

  return (
    <div className="calendars">
      <Calendar year={selectedMonth.year} month={selectedMonth.month} onSelectDay={selectDay} />
      <Calendar year={nextMonth.year} month={nextMonth.month} onSelectDay={selectDay} />
    </div>
  );
};

const mapStateToProps = ({ todayDate, dateInCalendars: { selectedMonth, nextMonth } }) => {
  return {
    todayDate,
    selectedMonth,
    nextMonth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectDay,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Calendars);
