
=== Sort Array Integer ===

function sortNumber(a,b) {
  return a - b;
}

numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort

=== get value from css ===

parseInt(window.getComputedStyle(element).getPropertyValue('padding'))

=== Remove Item from Array by id/value ===
array = array.filter(item => item['id'] !== id);

=== How To Toggle Between Hiding And Showing an Element ===
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

=== for-Schleife ===
for (let element of array) {
  console.log(element);
}

=== JavaScript Array kopieren/copy/klonen/clone ===
let clone = myArray.slice(0);

=== format german/european date ===
function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('.');
}
