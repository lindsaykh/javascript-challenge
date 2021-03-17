// from data.js
var tableData = data;

//Automatic Table and Date Search
// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data 
//for each UFO sighting.

//Make sure you have a column for date/time, city, state, country, shape, 
//and comment at the very least.

//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date/time column to find rows that match user input.

// Get a reference to the table body
var tbody = d3.select("tbody");

// reference the table
var table = d3.select("table");

// from html grab table class "table-striped"
table.attr("class", "table table-striped");

//  Use d3 to update each cell's text with UFO Sighting Values (date/time, city, state, country, shape, and comment)
data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
//     console.log(key, value);

//    Append a cell to the row for each value in the UFO report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Getting a reference to the input element on the page with the class property set to 'form-control'
var inputField = d3.select("form-control");

// Select Filter Table button