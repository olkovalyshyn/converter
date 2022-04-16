function DateToday() {
  let date = new Date();

  function AddZero(item) {
    return item < 10 ? '0' + item : item;
  }

  let Y = date.getFullYear(date);
  let M = AddZero(date.getMonth(date) + 1);
  let D = AddZero(date.getDate(date));

  return `${D}.${M}.${Y}`;
}

export default DateToday;
