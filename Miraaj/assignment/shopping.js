$(document).ready(function() {
  $('.red_cart').click(function(e){
    var price1=0;
    var quantity = $('.quantity').val();
    var unitPrice = $('.unitPrice').val();
    price1 = quantity * unitPrice
    $('.price').val(price1);
    var arr = $('.red1 .required').map(function(e){
      return this.value;
    }).get();
    alert(arr);
  });
});
