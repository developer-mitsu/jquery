$(function(){ 

  // 問題１
  $('#hover').on({
    'mouseenter': function(){
      $(this).css('color', 'black')},
    'mouseleave': function () {
      $(this).css('color', 'white')
      },
  })

  // 問題２
  $('#change-btn').on('click', function() {
      $(this).html('<a>クリックされました！</a>')
    })

  // 問題３
  $('#slide-btn').on('click', function() {
      $('.none').slideToggle();
    })
});
