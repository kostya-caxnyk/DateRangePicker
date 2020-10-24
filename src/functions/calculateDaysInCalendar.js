const calculateDaysInCalendar = (year, month) => {
  let date = new Date(year, month);

  const allDays = [];

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  const amountDaysInMonth = date.getDate();

  date.setDate(1);

  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
    allDays.push(date.getDate());
  }

  allDays.reverse();

  for (let i = 1; i <= amountDaysInMonth; i++) {
    allDays.push(i);
  }

  date.setDate(date.getDate() + allDays.length - 1);

  for (let i = 1; i <= 6 - date.getDay(); i++) {
    allDays.push(i);
  }

  return allDays;
};

export default calculateDaysInCalendar;
