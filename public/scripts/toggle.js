$(document).ready(function() {
  let toggle = false;
  $(".new-tweet").hide();

  $("nav a").on("click", function(e) {
    if(toggle) {
      toggle = false;
    } else if(!toggle){
      toggle = true;
    };
    if (toggle === true) {
      $(".new-tweet").slideDown(1000);
    } else {
      $(".new-tweet").slideUp(1000);
      $(".alert").slideUp(1000);
    }
  });
});
