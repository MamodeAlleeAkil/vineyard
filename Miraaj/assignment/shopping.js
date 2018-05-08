$(document).ready(function() {

  console.warn("first");
  $(".products-table").on('click', '.add-button', function () {
    console.warn("second");
    // get the current row
    var currentRow = $(this).closest("tr");

    var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    //var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    var quantity = currentRow.find(".quantity").val()
    var data = col1 + "\n" + col2 + "\n" + quantity;
    var a = [];
    a.push(data);
    document.getElementById("demo").innerHTML = a;
    alert(data);
  });
});
