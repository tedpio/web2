
function addItems(data) {
  console.log(data);

  for(var i = 0; i < data.items.length; i++) {
    addAVideo(data.items[i]);
  }
}

function addAVideo(item) {
   var title = item.snippet.title;
   var imageUrl = item.snippet.thumbnails.medium.url;
   var caption = item.snippet.description;

  var $container = $(".container");
  var $box = $("<div class='video'>");
  var $heading = $("<h2>").text(title);
  var $img = $("<img>").attr("src",imageUrl);
  var $caption= $("<p>").text(caption);

  $box.append($img);
  $container.append($box);

  $box.on("click",function(e) {
    showModal(item);
  });
}


function showModal(item) {
  var title = item.snippet.title;
  var imageUrl = item.snippet.thumbnails.medium.url;
  var caption = item.snippet.description;

  $(".modal").empty();

  var $h1 = $("<h1>").text(title);
  var videoId = item.id.videoId;
$iframe = $("<iframe>")
$iframe.attr("src","https://www.youtube.com/embed/" + videoId);
  var $p = $("<p>").text(caption);

   $(".modal").append($h1,$iframe,$p);
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


<script>
  function callback(data) {
    console.log(data);  
  }

  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1KS99bZkSz-68GKKalGwa8KcSwg3VztAWx2REDfcAGTM/edit#gid=0&vpid=true",
                   callback: callback,
                   simpleSheet: true } )
</script>
