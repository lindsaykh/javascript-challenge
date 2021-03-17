// define data table from data.js 
var tableData = data;
console.log("nothing is here")

// define the button from id in index.html 
var button = d3.select("#filter-btn");

// define action after button (Filter Sightings) is clicked 
button.on("click", function() {

  // define/select the input element from the index.html input id datetime
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // log the values
  console.log(`the inputValue is ${inputValue}`);
  // console.log(`the corresponding data for the input is ${tableData}`);

    // Use D3 to select the table body
  var tbody = d3.select("tbody");

  // Use D3 to select the table
  var table = d3.select("table");

  //remove any existing data from the table so as not to just append new values to previous values 
  tbody.html("");

  // Use D3 to set the table class to `table table-striped`
  table.attr("class", "table table-striped");

  // filter the data based on the input 
   var filteredData = tableData.filter(ufoSighting => (ufoSighting.datetime === inputValue));
  
   // Use d3 to append filtered data per UFO sighting value 
  filteredData.forEach(function(ufoSighting){
    console.log("something is here");
    var row =tbody.append("tr");
    //return an array of key,value entries
     Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
  });
  });