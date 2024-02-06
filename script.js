function submitForm() {
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var food = Array.from(document.getElementById("food").selectedOptions).map(option => option.value);
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Create table row
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cells = [firstName, lastName, address, pincode, gender, food.join(', '), state, country];

    for (var i = 0; i < cells.length; i++) {
      var cell = newRow.insertCell(i);
      cell.innerHTML = cells[i];
    }

    // Clear form fields
    document.getElementById("dataForm").reset();
  }




  // Example test case
  function runTest() {
    document.getElementById("firstName").value = "John";
    document.getElementById("lastName").value = "Doe";
    document.getElementById("address").value = "123 Main St";
    document.getElementById("pincode").value = "12345";
    document.getElementById("gender").value = "male";
    document.getElementById("food").value = ["burger", "pizza"];
    document.getElementById("state").value = "California";
    document.getElementById("country").value = "USA";

    submitForm();

    // Verify the first row in the table
    var firstRow = document.getElementById("dataTable").getElementsByTagName('tbody')[0].rows[0];
    if (
      firstRow.cells[0].innerHTML === "John" &&
      firstRow.cells[1].innerHTML === "Doe" &&
      firstRow.cells[2].innerHTML === "123 Main St" &&
      firstRow.cells[3].innerHTML === "12345" &&
      firstRow.cells[4].innerHTML === "male" &&
      firstRow.cells[5].innerHTML === "burger, pizza" &&
      firstRow.cells[6].innerHTML === "California" &&
      firstRow.cells[7].innerHTML === "USA"
    ) {
      console.log("Test Passed!");
    } else {
      console.error("Test Failed!");
    }
  }

  // Run the test on load
  runTest();
