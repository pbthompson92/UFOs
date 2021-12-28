// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    // clear out exisitng data
    tbody.html("");

    // loop through each object in data
    data.forEach((dataRow) => {
        // append a rwo to the table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow and add each value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// function for creating filter
function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if a date was entered and filter data using that date
    if (date) {
        //apply filter to the table data to only keep rows where the datetime value matches the fitler value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    // if no date entered then default if original tableData
    buildTable(filteredData)
}

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build table when page loads
buildTable(tableData);