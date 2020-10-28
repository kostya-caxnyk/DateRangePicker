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

const isToday = (date, today) => {
  return today.year === date.year && today.month === date.month && today.day === date.day;
};

export default calculateDaysInCalendar;
