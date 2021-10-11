const get__date = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  if(month < 10) month = '0' + month.toString();
  let currDate = date.getDate();
  if(currDate < 10) currDate = '0' + currDate.toString();

  let today_Date = `${year}-${month}-${currDate}`;
  return today_Date;
}

export default get__date;