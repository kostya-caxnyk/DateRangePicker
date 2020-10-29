import React from 'react';

import classNames from 'classnames';

const SidebarButtons = ({ buttons, handleMouseEnter, handleMouseLeave, setSelectionRange }) => {
  return (
    <div
      className="sidebar-buttons"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {buttons.map(({ label, range, changeDate, isActive }, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setSelectionRange(range) && changeDate && changeDate()}
            className={classNames({ 'btn-active': isActive })}>
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default SidebarButtons;
