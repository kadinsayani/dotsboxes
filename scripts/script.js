$(document).ready(function () {
  $("p").hide();
  $(".board").hide();
  $("a").click(function () {
    $("a").hide();
    $("p").show();
    $(".board").show();
  });
});
