var loadPlay = function(sound){
  sound.load();
  sound.play();
};

$(document).ready( function() {
  $('.note').on("click", function() {
    var selection = $(this).html();
    var sound = $("#" + selection + "Audio")[0];
  });

  $("body").on("keydown", function(event) {
    var sound = $("#" + event.key + "Audio")[0];
    loadPlay(sound);
  });
});
