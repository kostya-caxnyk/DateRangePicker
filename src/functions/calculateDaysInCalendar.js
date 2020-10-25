const calculateDaysInCalendar = (year, month) => {
  if (year === undefined || month === undefined) {
    return [];
  }

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
    allDays.push({
      day: i,
      month: date.getMonth(),
      year: date.getFullYear(),
      id: key++,
    });
  }

  date.setDate(date.getDate() + amountDaysInMonth - 1);

  for (let i = 1; i <= 6 - date.getDay(); i++) {
    allDays.push({ day: i, id: key++ });
  }

  return allDays;
};

export default calculateDaysInCalendar;
