
let date = new Date(); // new Date(unformattedDate)

2digit day of month
("0" + date.getDate()).slice(-2)

2digit month
("0" + (date.getMonth() + 1)).slice(-2)
