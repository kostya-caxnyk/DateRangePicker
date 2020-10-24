import React from 'react';
import Calendar from './Calendar';
import Header from './Header';
import MonthSlider from './MonthSlider';

const Content = () => {
  return (
    <div className="content">
      <Header />
      <MonthSlider />
      <div className="calendars">
        <Calendar />
        <Calendar />
      </div>
    </div>
  );
};

export default Content;
