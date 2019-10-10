$(function(){
    $('.nav-title').hover(function() {
        $(this).next().slideDown();
    }, 
    function() {
        $(this).next().slideUp();
    }    )
  });
  