import React from 'react';

const DateSelection = (props) => {
  const { value, onChange, optionsArr } = props;

  return (
    <span>
      <select  value={value} onChange={(e) => onChange(e.target.value)}>
        {optionsArr.map((date, idx) => (
          <option key={date} value={isFinite(date) ? date : idx}>
            {date}
          </option>
        ))}
      </select>
    </span>
  );
};

export default DateSelection;
