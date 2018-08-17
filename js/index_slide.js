$(".slideshow").append("<ul class='control'></ul>");
for (var i=0; i<$(".slideshow > div").size(); i++) {
  $(".slideshow > .control").append("<li onclick='gotoSlide("+i+")'></li>");
}

var current = 0;
$($(".slideshow > div").get(current)).show();
var timer = setInterval(function() {
  $($(".slideshow > div").get(current++)).hide();
  if (current==$(".slideshow > div").size()) current = 0;
  $($(".slideshow > div").get(current)).show();
}, 3000);

function gotoSlide(s) {
  $($(".slideshow > div").get(current)).hide();
  current = s;
  $($(".slideshow > div").get(current)).show();
  clearInterval(timer);
  timer = setInterval(function() {
    $($(".slideshow > div").get(current++)).hide();
    if (current==$(".slideshow > div").size()) current = 0;
    $($(".slideshow > div").get(current)).show();
  }, 3000);
}