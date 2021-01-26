// from data.js
var tableData = data;

//use d3 to select table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

//Loop Through `data` and console.log each ufo sighting
data.forEach(function(tableData) {
    console.log(tableData);
});

//Use d3 to append one table row `tr` for each ufo sighting
    data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    });

//    Use `Object.entries` to console.log each ufo sighting
    data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    });
    
    Object.entries(table.Data).forEach(function([key, value]) {
    console.log(key, value);
    });

//Use d3 to update each cell's text with
//new report values (date/time, city, state, country, shape, comment)
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the ufo report object
     var cell = row.append("td");
     cell.text(value);
    });
});
