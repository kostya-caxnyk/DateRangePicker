import React from 'react';

import { hoverAllDays, setSelectionRange } from '../actions';
import SidebarButtons from '../components/SidebarButtons';

import { connect } from 'react-redux';

const SidebarButtonsContainer = ({
  leftMonth,
  rightMonth,
  hoverAllDays,
  savedFromHoveredRange,
  setSelectionRange,
}) => {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let dayName = date.getDay();

  const today = {
    from: new Date(),
    to: new Date(),
  };

  const yesterday = {
    from: new Date(year, month, day - 1),
    to: new Date(year, month, day - 1),
  };

  const thisWeek = {
    from: new Date(year, month, day - dayName),
    to: new Date(year, month, day + 6 - dayName),
  };

  const lastWeek = {
    from: new Date(year, month, day - dayName - 7),
    to: new Date(year, month, day + 6 - dayName - 7),
  };

  const thisMonth = {
    from: new Date(year, month, 1),
    to: new Date(year, month + 1, 0),
  };

  const lastMonth = {
    from: new Date(year, month - 1, 1),
    to: new Date(year, month, 0),
  };

  const buttons = [
    { label: 'Today', range: today },
    { label: 'Yesterday', range: yesterday },
    { label: 'This week', range: thisWeek },
    { label: 'Last week', range: lastWeek },
    { label: 'This month', range: thisMonth },
    { label: 'Last month', range: lastMonth },
  ];

  const handleMouseEnter = () => {
    const from = {
      ...leftMonth,
      day: 1,
    };
    const date = new Date(rightMonth.year, rightMonth.month + 1, 0);
    const to = {
      ...rightMonth,
      day: date.getDate(),
    };
    hoverAllDays(from, to);
  };

  const handleMouseLeave = () => {
    hoverAllDays(savedFromHoveredRange, {});
  };

  return (
    <SidebarButtons
      buttons={buttons}
      handleMouseEnter={() => handleMouseEnter()}
      handleMouseLeave={() => handleMouseLeave()}
      setSelectionRange={setSelectionRange}
    />
  );
};

const mapStateToProps = ({
  dateInCalendars: { leftMonth, rightMonth },
  selectedRange: { from },
}) => ({
  leftMonth,
  rightMonth,
  savedFromHoveredRange: from,
});

export default connect(mapStateToProps, { hoverAllDays, setSelectionRange })(
  SidebarButtonsContainer,
);
