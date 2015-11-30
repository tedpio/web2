function callback(data) {
  console.log(data);
  
  for(var i = 0; i < data.length; i++) {
    addABox(data[i]);
  }
}

function addABox(item) {
   var Title = item.Title;
   var Image = item.Image;
   var Description = item.Description;

  var $container = $(".container");
  
  var $box = $("<div class='square'>");
  
  var $heading = $("<h2>").text(Title);
  var $img = $("<img>").attr("src",Image);
  var $caption= $("<p>").text(Description);

  $box.append($img);
  $container.append($box);

  $box.on("click",function(e) {
    showModal(item);
  });
}


function showModal(item) {
  var Title = item.Title;
  var img = item.Image;
  var style  = item.style;
  var Description = item.Description;
  var Brewery = item.Brewery;
  var color = item.color;

  $(".modal").empty();

  var $h1 = $("<h1>").text(Title);
  var $p = $("<p>").text(Description);
  var $img = $("<img>").attr("src",img);
  var $Brewery = $("<h3>").text(Brewery);
  var $style  = $("<h2>").text(style );

   $(".modal").append($h1,$p,$img,$style ,$Brewery);
   $(".overlay").show();
   $(".overlay").one("click",function(e) {
     hideModal();
   });
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}