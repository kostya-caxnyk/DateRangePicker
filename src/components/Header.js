import React from 'react';

import classNames from 'classnames';

const Header = ({
  isChoseStartRange,
  firstLabel,
  secondLabel,
  continueSelection,
  stopSelection,
}) => {
  return (
    <div className="header">
      <button
        className={classNames({ 'btn-selected': !isChoseStartRange })}
        onClick={() => isChoseStartRange && stopSelection()}>
        {firstLabel}
      </button>
      <button
        className={classNames({ 'btn-selected': isChoseStartRange })}
        onClick={() => !isChoseStartRange && continueSelection()}>
        {secondLabel}
      </button>
    </div>
  );
};

export default Header;
