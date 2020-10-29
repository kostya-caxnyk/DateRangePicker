const calculateDaysInCalendar = (monthDate, selectedRange, hoveredRange) => {
  const { year, month } = monthDate;
  if (year === undefined || month === undefined) {
    return [];
  }

  const todayDate = new Date();
  const today = {
    year: todayDate.getFullYear(),
    month: todayDate.getMonth(),
    day: todayDate.getDate(),
  };

  let date = new Date(year, month);
  let key = 100;
  const allDays = [];

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  const amountDaysInMonth = date.getDate();

  date.setDate(1);

  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
    allDays.push({ day: date.getDate(), id: key++ });
  }

  allDays.reverse();

  date.setDate(date.getDate() + allDays.length);

  for (let i = 1; i <= amountDaysInMonth; i++) {
    const dayData = {
      day: i,
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    allDays.push({
      ...dayData,
      id: key++,
      isToday: isToday(dayData, today),
      isSelected: isInRange(dayData, selectedRange),
      isHovered: isInRange(dayData, hoveredRange),
      isLeftEdge: isLeftEdge(dayData, selectedRange, hoveredRange, allDays.length),
      isRightEdge: isRightEdge(dayData, selectedRange, hoveredRange, allDays.length),
    });
  }

  date.setDate(date.getDate() + amountDaysInMonth - 1);

  for (let i = 1; i <= 6 - date.getDay(); i++) {
    allDays.push({ day: i, id: key++ });
  }

  return allDays;
};

const isInRange = (date, range) => {
  const idx = range.findIndex(
    ({ year, month, day }) => year === date.year && month === date.month && day === date.day,
  );

  return idx >= 0;
};

const isLeftEdge = (date, selectedRange, hoveredRange, index) => {
  if (index % 7 === 0) {
    return true;
  }

  if (date.day === 1) {
    return true;
  }

  if (
    date.year === selectedRange[0].year &&
    date.month === selectedRange[0].month &&
    date.day === selectedRange[0].day
  ) {
    return true;
  }

  if (
    hoveredRange.length !== 0 &&
    date.year === hoveredRange[0].year &&
    date.month === hoveredRange[0].month &&
    date.day === hoveredRange[0].day
  ) {
    return true;
  }

  return false;
};

const isRightEdge = (date, selectedRange, hoveredRange, index) => {
  if (index % 7 === 6) {
    return true;
  }

  const date2 = new Date(date.year, date.month + 1, 0);

  if (date.day === date2.getDate()) {
    return true;
  }

  let lastIdx = selectedRange.length - 1;
  if (
    date.year === selectedRange[lastIdx].year &&
    date.month === selectedRange[lastIdx].month &&
    date.day === selectedRange[lastIdx].day
  ) {
    return true;
  }

  lastIdx = hoveredRange.length - 1;
  if (
    hoveredRange.length !== 0 &&
    date.year === hoveredRange[lastIdx].year &&
    date.month === hoveredRange[lastIdx].month &&
    date.day === hoveredRange[lastIdx].day
  ) {
    return true;
  }

  return false;
};

const isToday = (date, today) => {
  return today.year === date.year && today.month === date.month && today.day === date.day;
};

export default calculateDaysInCalendar;
