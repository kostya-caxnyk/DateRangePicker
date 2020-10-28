import React from 'react';

import { connect } from 'react-redux';
import createLabel from '../functions/createDateLabel';
import Header from '../components/Header';
import { stopSelection, continueSelection } from '../actions';

const HeaderContainer = ({ isChoseStartRange, from, to, stopSelection, continueSelection }) => {
  let firstLabel, secondLabel;

  if (isChoseStartRange) {
    firstLabel = secondLabel = createLabel(from);
  }

  if (!isChoseStartRange && to.year) {
    const date1 = new Date(from.year, from.month, from.day);
    const date2 = new Date(to.year, to.month, to.day);

    if (date1 > date2) {
      const temp = from;
      from = to;
      to = temp;
    }

    firstLabel = createLabel(from);
    secondLabel = createLabel(to);
  }

  return (
    <Header
      firstLabel={firstLabel}
      secondLabel={secondLabel}
      isChoseStartRange={isChoseStartRange}
      stopSelection={stopSelection}
      continueSelection={continueSelection}
    />
  );
};

const mapStateToProps = ({ isChoseStartRange, selectedRange: { from, to } }) => ({
  isChoseStartRange,
  from,
  to,
});

export default connect(mapStateToProps, { stopSelection, continueSelection })(HeaderContainer);
