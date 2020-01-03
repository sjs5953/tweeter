$(document).ready(function() {

  //counters
  $("textarea").on("keyup change", function(e) {
    const counts = 140 - this.value.length;
    if (counts < 0) {
      $(".counter").css({ color: "red" });
    } else {
      $(".counter").css({ color: "#433E3F" });
    }
    $(".counter").text(counts);
    });
  });
  
  // on submit, change the counter value back to 140 and also the color back to black
  $("form").on("submit",function() {
    $(".counter").text(140).css({ color: "#433E3F" })
  });
