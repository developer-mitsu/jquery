$('.nav-title').on('click', function() {
  // $child = $(this).next();
  $('.nav-child').not($(this).next()).slideUp();
  $(this).next().slideToggle();
})