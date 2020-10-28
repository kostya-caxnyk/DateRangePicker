import React from 'react';
import { connect } from 'react-redux';

import { changeDate } from '../actions';

import DateSelection from './DateSelection';

const MonthAndYearSelections = (props) => {
  const { year, month, changeDate } = props;
  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const yearArr = [];

  for (let i = 2040; i > 1920; i--) {
    yearArr.push(i);
  }

  const onSelectChange = (changedValue) => {
    if (changedValue < 12 && changedValue >= 0) {
      changeDate(year, changedValue);
    } else {
      changeDate(changedValue, month);
    }
  };

  return (
    <span className="date-picker">
      <DateSelection optionsArr={monthArr} value={month} onChange={onSelectChange} />
      <DateSelection optionsArr={yearArr} value={year} onChange={onSelectChange} />
    </span>
  );
};

const mapStateToProps = ({
  dateInCalendars: {
    leftMonth: { year, month },
  },
}) => ({
  year,
  month,
});

export default connect(mapStateToProps, { changeDate })(MonthAndYearSelections);
