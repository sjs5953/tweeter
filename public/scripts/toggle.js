$(document).ready(function() {
  let counter = 0;
  $(".new-tweet").hide();

  $("nav a").on("click",function(e) {
    counter ++;
    if (counter%2!==0){
      $(".new-tweet").slideDown(1000)
    } else {
      $(".new-tweet").slideUp(1000)
      $(".alert").slideUp(1000)
    }    
  })

})