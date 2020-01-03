$(document).ready(function() {
  let toggle = false;
  $(".new-tweet").hide();

  $("nav a").on("click", function(e) {
    toggle = !toggle;
    if (toggle === true) {
      $(".new-tweet").slideDown(1000);
    } else {
      $(".new-tweet").slideUp(1000);
      $(".alert").slideUp(1000);
    }
  });
});
