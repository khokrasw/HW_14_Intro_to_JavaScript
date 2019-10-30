// from data.js
var tableData = data;

// // Data Structure Check Up
// document.write("<br> CollectingInformation About Data Structure:");
// document.write("<br>datetime: ", tableData[1].datetime);
// document.write("<br>city: ",tableData[1].city);
// document.write("<br>state: ",tableData[1].state);
// document.write("<br> country: ",tableData[1].country);
// document.write("<br> shape: ",tableData[1].shape);
// document.write("<br>duration: ",tableData[1].durationMinutes);
// document.write("<br> comments: ",tableData[1].comments);
// document.write("<br>>-----> End Data Structure Tests <-----< <br>");
// console.log(data);

dataLength=data.length;
console.log(dataLength);
startDate=tableData[0].datetime;
endDate=tableData[dataLength-1].datetime;
console.log(startDate, endDate);

var range="  ["+startDate+"  -  "+endDate+"]";
document.getElementById("date-range").innerHTML = range;