import React from 'react';

const SidebarButtons = ({ buttons, handleMouseEnter, handleMouseLeave, setSelectionRange }) => {
  return (
    <div
      className="sidebar-buttons"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {buttons.map(({ label, range }, idx) => {
        return (
          <button key={idx} onClick={() => setSelectionRange(range)}>
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default SidebarButtons;
