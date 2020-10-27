import React from 'react';

const Calendar = ({
  days,
  monthAndYear,
  onSelectDay,
  today,
  isChoseStartRange,
  isToday,
  isInSelectedRange,
  onHoverDays,
}) => {
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
              className={`${!year ? 'passive' : ''} ${isToday(today, date)}`}
              onClick={() => onSelectDay({ day, month, year }, isChoseStartRange)}
              onMouseEnter={() => {
                isChoseStartRange && onHoverDays({ day, month, year });
              }}>
              <span className={isInSelectedRange(date)}>{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
