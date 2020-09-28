// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Table function
function buildTable(data) {
    // Clearning the html table to start with a blank canvas
    tbody.html("");
  
    // Creating a for eaach loop to go through our data array
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field (object) and add as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
  }

// Filter function
function handleClick() {
    // Get filter date from user input datetime and filter tableData
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // If statememnt: check for date then filter based on that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date); 
    };
    // Rebuild table based on filtered data if there is no date filter then it will equl tableData
    buildTable(filteredData);
  }

// Listen for click
d3.selectAll("#filter-btn").on("click", handleClick);

// Create table
buildTable(tableData);