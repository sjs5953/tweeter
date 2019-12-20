$(document).ready(function() {
  
  $('userid').hide()
  $(".tweets").on("mouseover",() => {
    console.log(this);
    $(this).find(".userid").fadeIn(2000)
  })
 
});

