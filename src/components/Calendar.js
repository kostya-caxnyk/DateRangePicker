import React from 'react';

const Calendar = ({ days, monthAndYear, onSelectDay }) => {
  console.log(days);
  return (
    <div className="calendar">
      <div className="selected-month">{monthAndYear}</div>
      <div className="week-days">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="days">
        {days.map(({ day, id, month, year }) => (
          <button key={id} className={!year ? 'passive' : ''} onClick={() => onSelectDay({day, month, year})}>
            <span>{day}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
