var iso = new Date().toISOString();
var minDate = iso.substring(0, iso.length - 8);
document.getElementById("Arrival_Time").value = minDate
document.getElementById("Arrival_Time").min = minDate



var iso = new Date().toISOString();
var minDate = iso.substring(0, iso.length - 8);
document.getElementById("Dept_Time").value = minDate
document.getElementById("Dept_Time").min = minDate
