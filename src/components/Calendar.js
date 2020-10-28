import React from 'react';

import classNames from 'classnames';

const Calendar = ({ days, monthAndYear, onSelectDay, isChoseStartRange, onHoverDays, onRemoveHoveredRange }) => {
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
      <div className="days"  onMouseLeave={onRemoveHoveredRange}>
        {days.map((date) => {
          const { id, month, year, day, isToday, isHovered, isSelected } = date;
          return (
            <button
              key={id}
              className={classNames({
                passive: !year,
                today: isToday,
              })}
              onClick={() => onSelectDay({ day, month, year }, isChoseStartRange)}
              onMouseEnter={() => {
                isChoseStartRange && onHoverDays({ day, month, year });
              }}>
              <span className={classNames({ selected: isSelected, hovered: isHovered })}>
                {day}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
