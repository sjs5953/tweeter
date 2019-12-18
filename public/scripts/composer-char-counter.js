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
});