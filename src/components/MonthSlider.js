import React from 'react';

import MonthAndYearSelections from './MonthAndYearSelections';
import Slider from './Slider';

const MonthSlider = (props) => {
  return (
    <Slider>
      <MonthAndYearSelections/>
    </Slider>
  );
};

export default MonthSlider;
