var $allLinks = $("a");
$('h2').funText(33, 'candy');
var thumbnailify = function ($link) {
  var currentHREF = $link.attr("href");
  var thumbnailUrl = youtube.generateThumbnailUrl(currentHREF);
  var $img = $("<img>");
  $img.attr("src", thumbnailUrl);
  $link.append($img);

//
// <iframe width="560" height="315" src="https://www.youtube.com/embed/eEIdgYlwpb8" frameborder="0" allowfullscreen></iframe>
//

  $link.on("click", function (event) {
    event.preventDefault();
    var $iframe = $("<iframe></iframe>");
    $iframe.attr("width",420);
    $iframe.attr("height",315);
    $iframe.attr("frameborder", 0);
    $iframe.attr("allowfullscreen", true);
    var embedURL = youtube.generateEmbedUrl(currentHREF);
    $iframe.attr("src", embedURL);
    $("#holder").html($iframe);

    $iframe.hide();
    $("holder").html($iframe);
    $iframe.fadeIn(3000);
  })
};

$allLinks.each(function () {
  var $currentLink = $(this);
  thumbnailify($currentLink);

});
