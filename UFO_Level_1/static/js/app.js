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

console.log("Range: "+range);

function DeleteTableRows() {

    var rowCount = ufo_table.rows.length;

    for (var i = rowCount - 1; i > 0; i--) 
    {
        ufo_table.deleteRow(i);
    }
}

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() 
    {
    DeleteTableRows();

    console.log("Button Clicked");
    // Get the value in the input box
    var inputDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    
    // Dealing with the date entered as m/0d/yyyy otherwise the date 
    // will NOT be found
    if (inputDateValue.includes("/0", 1)===true)
       {inputDateValue= inputDateValue.replace("/0", "/");};

    // Filter Data for Input Date
    var filteredTable = tableData.filter(incident => incident.datetime === inputDateValue);
    FilteredLength=filteredTable.length;
    if (FilteredLength === 0) 
        { 
            xmsg="No Data for: "+inputDateValue;
            xmsg=xmsg+"\nDate Range Should be: "+range;
            alert(xmsg);
        };
   
    if (FilteredLength > 0)
        {
            // Get a reference to the table body
            var tblbody = d3.select("tbody"); 

            filteredTable.forEach((incident) => {
                var row = tblbody.append("tr");
                Object.entries(incident).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
              });
        }
    });