$('input').focus(function(){
  $(this).css('background','#d3d3d3');
});
$('textarea').focus(function(){
  $(this).css('background','#d3d3d3');
});
$('input').blur(function(){
  $(this).css('background','white');
});
$('textarea').blur(function(){
  $(this).css('background','white');
});
$('#form').submit(function(e){
  e.preventDefault();
  alert('Enviado Exitosamente');
});
$('h5').text('Contacto');
$('.info-contact').html('Escribinos cualquier duda que tengas!');
$('.info-contact').css('color', 'black');