const calculatingRange = ({ from, to }, isHovered) => {
  const range = [];

  if (!from.year) {
    return range;
  }

  if (from.year && to.year === undefined) {
    range.push({ year: from.year, month: from.month, day: from.day });
    return isHovered ? [] : range;
  }
  const fromDate = new Date(from.year, from.month, from.day);
  const toDate = new Date(to.year, to.month, to.day);

  if (fromDate > toDate) {
    let temp = from;
    from = to;
    to = temp;
  }

  let date = new Date(from.year, from.month, from.day);
  let year, month, day;
  do {
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    range.push({ year, month, day });
    date = new Date(year, month, day + 1);
  } while (!(day === to.day && month === to.month && year === to.year));

  return range;
};

export default calculatingRange;
