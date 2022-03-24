// code that builds the HTML table and fills it with data from data.js
// from data.js
const tableData = data;

// import the data from data.js
// type the following to declare a variable, tableData, using const
const tableData = data; 
// get table references
var tbody = d3.select("tbody");

// Reference the HTML table using d3
// with this code, we decare a variable tbody & tell Javascript to look for the tbody tags in the HTML. 
var tbody = d3.select("tbody"); 

//iterate through the array of objects in our data file and then append them to a table row.
// With this function, we have done the following:
// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell
function buildTable(data) {
    // first clear the data
    tbody.html("");
    //Now that we have the start of a clean table, let's apply the forEach function.
  // First, clear out any existing data
  tbody.html("");

    // create another function specifically for building the table. 
    // Data from the data.js file will be inserted into the table, row by row.
    // This time, we'll use a forEach function, which loops through the array in the same way as a for loop. 
    // The difference is that forEach works only with arrays. 
    // Another benefit is that forEach can be combined with an arrow function, once again making the code more concise and easy to read.
    data.forEach((dataRow) => {
        // create a variable that will append a row to the table body
        // This single line of code is doing a lot. It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").\
        // <tr> tags are used for each row in a table. 
        // Each object, or UFO sighting, in the array will be wrapped in a <tr> tag.
        let row = tbody.append("tr");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

        // Next, we'll add code to loop through each field in the dataRow argument. 
        // These fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table
        // We're already working with an array of objects, where each object is a UFO sighting. 
        // By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. 
        // By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. 
        // We've added forEach((val) to specify that we want one object per row.
        // we're telling our code put each sighting onto its own row of data. 
        // The val argument represents each item in the object, such as the location, shape, or duration.
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table.
            let cell = row.append("td");
            // add the values
            cell.text(val); 
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

            }
        );
// 1. Create a variable to keep track of all the filters as an object.
var filters = {}; 

    });

}
// 3. Use this function to update the filters. 
function updateFilters() {

  // add a function to respond to a user clicking the HTML button, using D3 (data driven documents)
  // this will help users be able to filter data 
  // The .select() function is a very common one used in D3. It will select the very first element that matches our selector string: "#datetime"
  // With d3.select("#datetime"), we're telling D3 to look for the #datetime id in the HTML tags
  // By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored 
  // on the webpage, but to actually grab that information and hold it in the "date" variable.
  function handleClick() {
      let date = d3.select("#datetime").property("value");
      // 4a. Save the element that was changed as a variable.
      let changedElement = d3.select(this); 
  
      // Now we need to set a default filter and save it to a new variable. 
      // Our default filter will actually be the original table data because we want users to refine their search on their own terms. 
      // Let's add the new variable on the next line.
      let filteredData = tableData;
      // 4b. Save the value that was changed as a variable.
      let elementValue = changedElement.property("value");
      console.log(elementValue);
  
      // The next step is to check for a date filter using an if statement.
      //  "Show only the rows where the date is equal to the date filter we created above." 
      // The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly.
      if (date) {
          filteredData = filteredData.filter(row => row.datetime === date);
      // 4c. Save the id of the filter that was changed as a variable.
      let filterId = changedElement.attr("id");
      console.log(filterId);
  

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();

  }

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {

    // 8. Set the filtered data to the tableData.
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filteredData = tableData;

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

    