$(document).ready(function() {
  $('.red_cart').click(function(e){
    var price1=0;
    var quantity = $('.quantity').val();
    var unitPrice = parseInt($('.unitPrice').val());
    price1 = parseInt(quantity * unitPrice);
    $('.price').val(price1);
    var arr = $('.red1 .required').map(function(e){
      return this.value;
    }).get();
    alert(quantity);
    alert(unitPrice);
    alert(price1);
    alert(arr);
  });
});
