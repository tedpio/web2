
function addItem(item) {
  var $li = $("<li>").addClass("item").addClass(item.Color);

  $li.attr("data-category",item.Color);

  var $h2 = $("<h2 class='Title'>").text(item.Name);
  var $p = $("<p class='Description'>").text(item.Description);

  $li.append($h2).append($p);

  $(".collection").append($li);
};

function addItems(data) {
  for(var i=0;i<data.length;i++) {
    addItem(data[i]);
  }
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

