$(document).ready(function() {
  
  //tweet container effect
  $(".tweet-container header div + p").hide()
  $(".tweet-container").on("mouseover",function() {
    $(".userid").fadeIn(1000);
    $(this).css("box-shadow","10px 10px grey");
 
  })
  $(".tweet-container").on("mouseleave",function() {
    $(".userid").fadeOut(1000);
    $(this).css("box-shadow","none");
  
  })
  
});