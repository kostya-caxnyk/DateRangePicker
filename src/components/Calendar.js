import React from 'react';

import classNames from 'classnames';

const Calendar = ({
  days,
  monthAndYear,
  handleClick,
  handleMouseEnter,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
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
        {days.map((dateData) => {
          const {
            id,
            month,
            year,
            day,
            isToday,
            isHovered,
            isSelected,
            isLeftEdge,
            isRightEdge,
          } = dateData;
          const data = { day, month, year };
          return (
            <button
              key={id}
              className={classNames({
                passive: !year,
                today: isToday,
              })}
              onClick={handleClick(data)}
              onMouseEnter={handleMouseEnter(data)}
              onMouseDown={handleMouseDown(data)}
              onMouseMove={handleMouseMove(data)}
              onMouseUp={handleMouseUp}>
              <span
                className={classNames({
                  selected: isSelected,
                  hovered: isHovered,
                  leftEdge: isLeftEdge,
                  rightEdge: isRightEdge,
                })}>
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
