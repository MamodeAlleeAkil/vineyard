



function validateForm() {
  var f_name = document.querySelector("#fname").value;
  var sname = document.querySelector("#sname").value;
  var mobile = document.querySelector("#mobile").value;
  var email = document.querySelector("#email").value;
  var nic = document.querySelector("#nic").value;
  /*var wine = document.getElementsByName('wine');
  var gender = document.getElementsByName('gender');
  var country = document.querySelector("#country").value;
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#psw").value;
  var pswconfirm = document.querySelector("#pswconfirm").value;*/

var numbers = '^[0-8]$';
  var letters = /^[A-Za-z]+$/;
  var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  /*var mobile = document.querySelector("mobile").value;
  var email = document.querySelector("email").value;
  var nic = document.querySelector("nic").value;
  var wtp = document.querySelector("wine-type-preference").value;
  var gender = document.querySelector("gender").value;
  var country = document.querySelector("country").value;
  var username = document.querySelector("username").value;
  var psw = document.querySelector("password").value;
  var pswConfirm = document.querySelector("password-confirm").value; */



// firstname
if(f_name== ""){
  alert("Please first name field should not be empty");

  return false;
}
else if(!f_name.match(letters)){
  alert("Please first name should contain only alphabets");
  return false;
}

if(sname== ""){
  alert("Please surname field should not be empty");
  return false;
}
else if(!sname.match(letters)){
  alert("Please surname should contain only alphabets");
  field1.focus();
  return false;
}

if(mobile== ""){
  alert("Please enter your mobile phone number");
  return false;
}
else if(mobile.length < 8 || mobile.length >9){
  alert("Please enter a mobile phone number with 8 digit");
  field1.focus();
  return false;
}
if(email== ""){
  alert("Please email should not be empty");
  return false;
}
else if(!email.match(emailFormat)){
  alert("Please enter a valid email");
  field1.focus();
  return false;
}

if(nic== ""){
  alert("Please NIC  field should not be empty");
  return false;
}
else if(nic.length < 14 || nic.length > 14) {
  alert("Please enter a valid NIC");
  field1.focus();
  return false;
}

}
  // if (
  //   fname == null || fname == "",
  //   sname == null || sname == "",
  //   mobile == null || mobile == "",
  //   email == null || email == "",
  //   nic == null || nic == "",
  //   wtp == null || wtp == "",
  //   gender == null || gender == "",
  //   country == null || country == "",
  //   username == null || username == "",
  //   psw == null || psw == "",
  //   pswConfirm == null || pswConfirm == "") {
  //   alert("Please Fill All Required Field");
  //   return false;
  // }
  // if(nic.length != 14) {
  //   alert("NIC should contain 14 Characters");
  // }

  // if(!(fname.match(letters)) || !(sname.match(letters))) {
  //   alert("Name should Contain only letters");
  // }

  // if(!(mobile.match(numbers))) {
  //   alert("Mobile should Contain only Numbers");
  // }

  //if(!(email.match(emailFormat))) {
  //  alert("Email format is wrong!");
  //}



//}


$(document).ready(function () {

  // code to read selected table row cell data (values).
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

    alert(data);
  });
});
