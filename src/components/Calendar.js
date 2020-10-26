import React from 'react';

const Calendar = ({ days, monthAndYear, onSelectDay, from, to }) => {
  const isSelected = (dateSelected, dateInArr) => {
    if (
      dateSelected.year === dateInArr.year &&
      dateSelected.month === dateInArr.month &&
      dateSelected.day === dateInArr.day
    ) {
      return 'selected';
    }
    return '';
  };
  
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
        {days.map((date) => {
          const { id, month, year, day } = date;
          return (
            <button
              key={id}
              className={!year ? 'passive' : ''}
              onClick={() => onSelectDay({ day, month, year })}>
              <span className={isSelected(from, date)}>{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
