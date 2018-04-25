$(document).ready(function() {
  // $("#pagetitle").html("<p>Strictly Interiors</p>");

  $("#pagetitle").css("color", "pink");

  $("#hide").click(function() {
  $(".container").hide();
});
});

$(document).ready(function() {
$("#show").click(function() {
  $(".container").show();
});
});

$(document).ready(function() {
$("h2").hover(function() {
  $(".imghover").fadeOut(1000);
  $(".imghover").fadeIn(1000);
});
});

$(document).ready(function(){
  $("#home").click(function(){
    $('#pagetitle').effect("shake", {times:4}, 1000);
  });

});
