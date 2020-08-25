/* $('h1').click(function () {
  $('h1').css('color', 'pink');
});
 */
/* 
$('button').click(function () {
  $('h1').css('color', 'gold');
  setTimeout(function () {
    $('h1').css('color', 'blue');
  }, 2000);
}); */

/* $(document).keypress(function (event) {
  $('h1').text(event.key);
}); */

$('h1').on('mouseover', function () {
  $('h1').css('color', 'gold');
  setTimeout(function () {
    $('h1').css('color', 'red');
  }, 1000);
});
