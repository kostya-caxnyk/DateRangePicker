const createDateLabel = ({ year, month, day }) => {
  const date = new Date(year, month, day).toString().split(' ');
  return `${date[1]} ${date[2]}, ${date[3]}`;
};

export default createDateLabel;