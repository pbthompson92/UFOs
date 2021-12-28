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