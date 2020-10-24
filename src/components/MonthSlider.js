import React from 'react';

const MonthSlider = () => {
  return (
    <div className="month-slider">
      <button className="prev-month">
        <i className="fas fa-caret-left"></i>
      </button>
      <span className="date-picker">
        <span>
          <select>
            <option>October</option>
            <option>November</option>
          </select>
        </span>
        <span>
          <select>
            <option>2020</option>
            <option>2021</option>
          </select>
        </span>
      </span>
      <button className="next-month">
        <i className="fas fa-caret-right"></i>
      </button>
    </div>
  );
};

export default MonthSlider;
