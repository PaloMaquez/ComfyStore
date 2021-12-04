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
