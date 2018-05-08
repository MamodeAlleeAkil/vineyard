$(document).ready(function() {
  var hasError = false,
      nameRegex = /^[A-Za-z\h=äöüß€’éëïóöü]+$/,
      emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  $('.register').click(function(e){
    e.preventDefault();
    var str = $('.nic input').val(),
        extract = str.slice(1, 7);
    $('input').removeClass('error');
    $('.error_message').hide();
    e.preventDefault();
    $('.form_credentials input').each(function(){
      if($(this).val().length==0){
        $(this).addClass('error');
        $(this).next('.error_message').show();
        hasError= true;
      }
    });
    if ($('.email input').val() != 'undefined' && !emailReg.test($('.email input').val()) || $('.email input').val().length == 0){
      $('.email input').addClass('error');
      hasError = true;
    };
    if ($('.first_name input').val() != 'undefined' && !nameRegex.test($('.first_name input').val()) || $('.first_name input').val().length == 0){
      $('.first_name input').addClass('error');
      hasError = true;
      $('.first_name input').next('.error_message').show();
    };
    if ($('.surname input').val() != 'undefined' && !nameRegex.test($('.surname input').val()) || $('.surname input').val().length == 0){
      $('.surname input').addClass('error');
      $('.surname input').next('.error_message').show();
      hasError = true;
    };
    if($('.confirm_password input').val() !== $('.password input').val()){
      $('.confirm_password input').addClass('error');
      $('.confirm_password input').next('.error_message').show();
      hasError = true;
    }
    if($('.username input').val().length<8 && $('.username input').val().indexOf(extract) != -1){
      $('.username input').addClass('error');
      $('.username input').next('.error_message').show();
    }

    if($('.number input').val().length<8){
      $('.number input').addClass('error');
      $('.number input').next('.error_message').show();
      hasError = true;
    }

    if (!$.isNumeric($('.number input').val())){
      $(this).val('');
      $('.number input').addClass('error');
      $('.number input').next('.error_message').show();
      hasError = true;
    }

    if(grecaptcha.getResponse().length==0){
      $('.g-recaptcha').addClass('error');
      hasError = true;
    }

    if(hasError == false && grecaptcha.getResponse().length!==0){
      location.href = 'vineyardred.html';
    }

    $('.error').first().focus();

  });

  $('.nic input').keydown(function(e){
    var inputVal = $.trim($(this).val());
    if(inputVal.length == $(this).attr("maxlength")){
      return false;
    }
  });

  $(".number input").keydown(function (e) {
    var inputVal = $.trim($(this).val());
    $(this).parent('label').removeClass('error validated');
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 107, 109]) !== -1 ||
         // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
    if(inputVal.length == $(this).attr("maxlength")){
        return false;
      }
  }).blur(function(e) {
    var inputVal = $.trim($(".number input").val());
    if (!$.isNumeric(inputVal)){
      $(this).val('');
    }
  });

  $('.red').on("change",function(){
    alert("You have selected RED wine");
  });
  $('.white').on("change",function(){
    alert("You have selected WHITE wine");
  });
  $('.rose').on("change",function(){
    alert("You have selected ROSÉ wine");
  });
  $('.male').on("change",function(){
    alert("You have selected MALE");
  });
  $('.female').on("change",function(){
    alert("You have selected FEMALE");
  });


  $('.reset').click(function(e){
    e.preventDefault();
    $('.overlay, .popup').show();
  });

  $('.ok').click(function(e){
    e.preventDefault();
    $('.form_credentials input').val('').removeClass('error');
    $('.overlay, .popup').hide();
    $('.error_message').hide();
    $('.g-recaptcha').removeClass('error');
  });

  $('.cancel').click(function(e){
    e.preventDefault();
    $('.overlay, .popup').hide();
  });

});
