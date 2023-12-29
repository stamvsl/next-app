const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return new Date(`${year}-${month}-${day}`);
};

const isValidDateFormat = (dateString) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateRegex.test(dateString);
};

const isValidDate = (dateString) => {
  const date = parseDate(dateString);
  return !isNaN(date.getTime());
};

export { parseDate, isValidDateFormat, isValidDate };
