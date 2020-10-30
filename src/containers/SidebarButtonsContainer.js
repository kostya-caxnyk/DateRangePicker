import React from 'react';

import { hoverAllDays, setSelectionRange, changeDate } from '../actions';
import SidebarButtons from '../components/SidebarButtons';

import { connect } from 'react-redux';

const SidebarButtonsContainer = ({
  leftMonth,
  rightMonth,
  hoverAllDays,
  savedFromHoveredRange,
  setSelectionRange,
  changeDate,
  selectedRange,
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

  let buttons = [
    { label: 'Today', range: today, changeDate: () => changeDate(year, month) },
    { label: 'Yesterday', range: yesterday, changeDate: () => changeDate(year, month) },
    { label: 'This week', range: thisWeek, changeDate: () => changeDate(year, month) },
    { label: 'Last week', range: lastWeek, changeDate: () => changeDate(year, month) },
    { label: 'This month', range: thisMonth, changeDate: () => changeDate(year, month) },
    { label: 'Last month', range: lastMonth, changeDate: () => changeDate(year, month - 1) },
  ];

  buttons = buttons.map((item) => {
    let from = item.range.from;
    let to = item.range.to;

    item.range.from = {
      year: from.getFullYear(),
      month: from.getMonth(),
      day: from.getDate(),
    };

    item.range.to = {
      year: to.getFullYear(),
      month: to.getMonth(),
      day: to.getDate(),
    };

    from = item.range.from;
    to = item.range.to;

    const fromRange = selectedRange.from;
    const toRange = selectedRange.to;

    if (
      from.year === fromRange.year &&
      from.month === fromRange.month &&
      from.day === fromRange.day &&
      to.year === toRange.year &&
      to.month === toRange.month &&
      to.day === toRange.day
    ) {
      item.isActive = true;
    }

    return item;
  });

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
  selectedRange,
}) => ({
  leftMonth,
  rightMonth,
  savedFromHoveredRange: from,
  selectedRange,
});

export default connect(mapStateToProps, { hoverAllDays, setSelectionRange, changeDate })(
  SidebarButtonsContainer,
);
