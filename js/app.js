$(document).ready(function(){
  $('.js--section-intro').waypoint(function(direction){
    if (direction == 'down'){
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  })
});