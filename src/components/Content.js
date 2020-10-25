import React from 'react';

import Calendars from './Calendars';
import Header from './Header';
import MonthSlider from './MonthSlider';

const Content = () => {
  return (
    <div className="content">
      <Header />
      <MonthSlider />
      <Calendars />
    </div>
  );
};

export default Content;
