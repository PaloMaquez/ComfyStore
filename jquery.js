$('textarea').blur(function(){
  $(this).css('background','white');
});
$('#form').submit(function(e){
  e.preventDefault();
  // $('#form').text('Enviado Exitosamente');
});
$('h5').text('Contacto');
$('.info-contact').html('Escribinos cualquier duda que tengas!');
$('.info-contact').css('color', 'black');
//Animations
$(document).ready(function(){
  $("#input-submit").click(function(){
    $("#input-submit").animate({
      width: '600px',
      height: '100px',
    }, 1000,);
    $(".input-clickText").show().animate({opacity: '1'}, 2000);
  });
});