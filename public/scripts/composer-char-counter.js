$(document).ready(function() {
  // --- our code goes here ---

  //counters
  $("textarea").on("keyup change",function (e) {
    let counts = 140-this.value.length;
    if (counts < 0) {
      this.closest(".counter").css({color: "red"})
    } else {
      $(".counter").css({color: "#433E3F"})
    }
    $(".counter").text(counts);
  })
  
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