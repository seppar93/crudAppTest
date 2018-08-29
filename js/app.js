function dataRetreval() {
  let col = []; // keys stored in array
  for (let i = 0; i < TABLE_DATA.length; i++) {
    let obj = TABLE_DATA[i];

    for (let key in obj) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  let table = document.createElement("table"); // table is created

  let tr = table.insertRow(-1); // creating the rows

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th); // creates the header dynamically
  }

  for (let i = 0; i < TABLE_DATA.length; i++) { // itorates through the data
    // TABLE_DATA[i]
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = TABLE_DATA[i][col[j]]; // the inner table is filled with the data
    }
  }
  // debugger;
  var divContainer = document.getElementById("start");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);

  var userProdividedData = "exam.html"; // prevent XSS
  element.innerHTML = userProdividedData;
}
