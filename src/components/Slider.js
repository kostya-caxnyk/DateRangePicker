import React from 'react';

import { connect } from 'react-redux';

import { changeDate } from '../actions';

const Slider = (props) => {
  const { year, month, changeDate } = props;

  return (
    <div className="month-slider">
      <button className="prev-month" onClick={() => changeDate(year, month - 1)}>
        <i className="fas fa-caret-left"></i>
      </button>
      {props.children}
      <button className="next-month" onClick={() => changeDate(year, month + 1)}>
        <i className="fas fa-caret-right"></i>
      </button>
    </div>
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

export default connect(mapStateToProps, { changeDate })(Slider);
