$(document).ready(function() {

  console.warn("first");
  var itemArray = [];
  $(".products-table").on('click', '.add-button', function (e) {
    e.preventDefault();
    $('.cartbox').empty();
    console.warn("second");
    // get the current row
    var currentRow = $(this).closest("tr");
    var productCode = currentRow.find("td:eq(1)").text(); // get current row 1st TD value
    var productName = currentRow.find("td:eq(2)").text(); // get current row 2nd TD
    var unitPrice = currentRow.find("td:eq(4)").text(); // get current row 2nd TD
    var quantity = currentRow.find(".quantity").val();
    var total = parseInt(unitPrice * quantity);
    var data = "\n" + productCode + "\n" + productName + "\n" + quantity + "\n" + unitPrice + "\n" + total + "<br />";


    itemArray.push(data);
    // document.getElementById("demo").innerHTML = a;
    window.localStorage.setItem(productCode, JSON.stringify(itemArray));
    var retrievedData = window.localStorage.getItem(productCode);
    var info = JSON.parse(retrievedData);
    $('.cartbox').append("<br />" +itemArray + "<br />");
  });

  $('.cart').click(function(e){
    e.preventDefault();
    $('.cartbox').append("<br />" +itemArray);
  });

  $('.red-page').click(function(e){
    $('.red').show();
    $('.white').hide();
    $('.rose').hide();
  });

  $('.white-page').click(function(e){
    $('.white').show();
    $('.red').hide();
    $('.rose').hide();
  });

  $('.rose-page').click(function(e){
    $('.rose').show();
    $('.red').hide();
    $('.white').hide();
  });

});
