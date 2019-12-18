$(document).ready(function() {
  
  //tweet container effect
  $(".tweets header div + p").hide()
  $(".tweets").on("mouseover",function() {
    $(this).find(".userid").fadeIn(1000);
    $(this).css("box-shadow","10px 10px grey");
 
  })
  $(".tweets").on("mouseleave",function() {
    $(this).find(".userid").fadeOut(1000);
    $(this).css("box-shadow","none");
  })

});

