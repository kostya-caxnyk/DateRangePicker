import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-buttons">
        <button className="btn-active">Today</button>
        <button>Yesterday</button>
        <button>This week</button>
        <button>Last week</button>
        <button>This month</button>
        <button>Last month</button>
      </div>
    </div>
  );
};

export default Sidebar;
