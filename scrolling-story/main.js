$(".scroller").scrollFlight();
$(".title").on("arrived",function() {
  $(this).addClass("arrived");
});


var canvas = document.getElementById('enigma')
  , context = canvas.getContext('2d')
  , img = new Image()
  , w
  , h
  , offset
  , glitchInterval;

img.src = 'image3.png';
img.onload = function() {
  init();
	window.onresize = init;
};

var init = function() {
	clearInterval(glitchInterval);
	canvas.width = w = window.innerWidth;
	offset = w * .1;
	canvas.height = h = ~~(175 * ((w - (offset * 2)) / img.width));
	glitchInterval = setInterval(function() {
		clear();
		context.drawImage(img, 0, 110, img.width, 175, offset, 0, w - (offset * 2), h);
		setTimeout(glitchImg, randInt(250, 1000));
	}, 500);
};

var clear = function() {
	context.clearRect(0, 0, w, h);
	context.fill();
};

var glitchImg = function() {
	for (var i = 0; i < randInt(1, 13); i++) {
		var x = Math.random() * w;
		var y = Math.random() * h;
		var spliceWidth = w - x;
		var spliceHeight = randInt(5, h / 3);
		context.clearRect(0, y, spliceWidth, spliceHeight);
		context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
		context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
	}
};

var randInt = function(a, b) {
	return ~~(Math.random() * (b - a) + a);
};

$(".left-image").on("arrived", function(e) {
   $(this).addClass("arrived");
   return false;
 });

 $(".left-image").on("rearrived", function(e) {
   $(this).removeClass("arrived");
   return false;
 });

 $(".right-image").on("arrived", function(e) {
    $(this).addClass("arrived");
    return false;
  });

  $(".right-image").on("rearrived", function(e) {
    $(this).removeClass("arrived");
    return false;
  });
