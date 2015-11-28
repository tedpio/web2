var images= null;
function drawImages(data) { console.log(data)
images= data;

for(var i=0;i<images.data.length;i++) {
  addImage(images.data[i]);
  }
}

 function addImage(item) {
   var url= item.images.thumbnail.url;
   var $container = $(".container");

   var $img = $("<img>").attr("src",url);

   $container.append($img);
}
