// from data.js
var tableData = data;

// Global Variables
var keys = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//use d3 to select table body
var tbody = d3.select("tbody");

// Console.log the ufo data.js
console.log(data);

function populate(inputData){
    inputData.forEach(sighting => {
        var row = tbody.append("tr");
        keys.forEach(key => row.append("td").text(sighting[key]));
    });
};
populate(tableData);

//Declare button
var button = d3.select("#filter-btn");
//Declare form
var form = d3.select("#datetime");

//Create event handlers
button.on("click",runSearch);
form.on("submit",runSearch);

// This function is triggered when the button is clicked
function runSearch() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log("runSearch: " + inputValue);
    
    //Get the value property of the input element
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    tbody.html("");
    populate(filteredData);
};