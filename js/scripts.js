$('.skill').hover(function(){
  var prBar = $(this).children('.progressbar');

  prBar.fadeIn(300)

  prBar.children('.percent-20').addClass('percent-20-animation');
  prBar.children('.percent-40').addClass('percent-40-animation');
  prBar.children('.percent-60').addClass('percent-60-animation');
  prBar.children('.percent-80').addClass('percent-80-animation');
  prBar.children('.percent-100').addClass('percent-100-animation');
});

$('.env').hover(function(){
  $(this).children('.logo-80x80')
    .addClass('env-logo-animation')
    .delay(1000)
    .queue(function () {
      $(this).removeClass('env-logo-animation')
        .dequeue();
    })
});

$('header').height($(window).height());

console.log('hi');