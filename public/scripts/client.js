/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  function createTweetElement(obj) {
    const name = obj.user.name;
    const avatars = obj.user.avatars;
    const handle = obj.user.handle;
    const text = obj.content.text;

    const fullDate = new Date(obj.created_at);
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth();
    const date = fullDate.getDate();
    const hour = fullDate.getHours();
    const minute = fullDate.getMinutes("");

    const time = `${hour}:${minute}_${month}.${date}.${year}`;

    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    let $tweet = $("<article>").addClass("tweets");
    $tweet.append(`
    <header>
        <div>
          <img src= ${avatars}
          alt="User image" height= 40px; width=40px>
          <p>${name}</p>
        </div>
        <p class="userid">${handle}</p>
      </header>

      <section>
        <p>${escape(text)}</p>
      </section>

      <footer>
        <p>${time}</p>
        <p>@@@</p>
      </footer>
    `);
    return $tweet;
  }

  function renderTweets(data) {
    for (let ele of data) {
      const tweets = createTweetElement(ele);
      $(".tweet-container").prepend(tweets);
    }
  }

  //alert message hide
  $(".alert").hide();

  // post request
  $("form").on("submit", function(event) {
    event.preventDefault();
    const inputLength = $(this)
      .find(".tweet-msg")
      .val().length;
    const serialized = $(this).serialize();
    if (inputLength <= 0) {
      $(".no-input").slideDown(500);
      $(".exceed").slideUp(500);
      $(this)
        .find(".tweet-msg")
        .val("");
    } else if (inputLength > 140) {
      $(".exceed").slideDown(500);
      $(".no-input").slideUp(500);
      $(this)
        .find(".tweet-msg")
        .val("");
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: serialized
      }).then(() => {
        $.get("/tweets").then(database => {
          database;
          const lastTweet = database.length - 1;
          const newTweet = createTweetElement(database[lastTweet]);
          $(".tweet-container").prepend(newTweet);
          $(this)
            .find(".tweet-msg")
            .val("");
          $(".alert").slideUp(1000);
        });
      });
    }
  });

  //function for get request
  function loadTweets() {
    $.get("/tweets").then(renderTweets);
  }

  loadTweets();
});

// $('form').on('submit', function(e){
//   e.preventDefault();
//   const newTweet = $(this).find(".tweet-msg").val();
//   console.log('submitted!', newTweet);
//   const serialized = $(this).serialize();
//   console.log("serialized", serialized);

//     const inputLength = newTweet.length;
//   if (inputLength <= 0) {
//     alert("You need to put in input!")
//   } else if (inputLength > 140) {
//     alert("You have exceeded the limit!")
//   } else {

//     $.ajax({
//       url: '/tweets',
//       method: 'POST',
//       data: serialized
//     })
//     // .then(loadTweets)
//   }
// })
