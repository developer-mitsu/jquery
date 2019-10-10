$(function() {

  // hoverイベント
  $('.hover').on({
    'mouseenter': function(){
      $(this).css({'font-size':'30px', 'color': 'red'})},
    'mouseleave': function () {
      $(this).css({'font-size':'20px', 'color': 'white'})
      },
  });

  // クリックイベント
  $('#js-open').on({
    'click': function() {
      $('.menu-child').slideToggle();
    }
  })
})
