import React from 'react';

import { connect } from 'react-redux';

import { selectDay } from '../actions';

import Calendar from './CalendarContainer';

const Calendars = (props) => {
  const { selectedMonth, nextMonth, selectDay, from, to } = props;

  return (
    <div className="calendars">
      <Calendar
        year={selectedMonth.year}
        month={selectedMonth.month}
        onSelectDay={selectDay}
        from={from}
        to={to}
      />
      <Calendar
        year={nextMonth.year}
        month={nextMonth.month}
        onSelectDay={selectDay}
        from={from}
        to={to}
      />
    </div>
  );
};

const mapStateToProps = ({
  todayDate,
  dateInCalendars: { selectedMonth, nextMonth },
  selectedRange: { fromDate, toDate },
}) => {
  return {
    todayDate,
    selectedMonth,
    nextMonth,
    from: fromDate,
    to: toDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectDay,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Calendars);
