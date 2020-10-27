import React from 'react';

import { connect } from 'react-redux';

import { selectDay, hoverDays } from '../actions';

import Calendar from './CalendarContainer';

const Calendars = (props) => {
  const {
    selectedMonth,
    nextMonth,
    selectDay,
    from,
    to,
    todayDate,
    isChoseStartRange,
    hoverDays,
    toDateHovered,
  } = props;

  return (
    <div className="calendars">
      <Calendar
        year={selectedMonth.year}
        month={selectedMonth.month}
        today={todayDate}
        onSelectDay={selectDay}
        from={from}
        to={to}
        isChoseStartRange={isChoseStartRange}
        toDateHovered={toDateHovered}
        onHoverDays={hoverDays}
      />
      <Calendar
        year={nextMonth.year}
        month={nextMonth.month}
        today={todayDate}
        onSelectDay={selectDay}
        from={from}
        to={to}
        isChoseStartRange={isChoseStartRange}
        toDateHovered={toDateHovered}
        onHoverDays={hoverDays}
      />
    </div>
  );
};

const mapStateToProps = ({
  todayDate,
  dateInCalendars: { selectedMonth, nextMonth },
  selectedRange: { fromDate, toDate, toDateHovered },
  isChoseStartRange,
}) => {
  return {
    todayDate,
    selectedMonth,
    nextMonth,
    from: fromDate,
    to: toDate,
    isChoseStartRange,
    toDateHovered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectDay,
    hoverDays,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Calendars);
