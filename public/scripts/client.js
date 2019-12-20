////functions

// take the json object and create an html element
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
  let tweet = $("<article>").addClass("tweets");
  tweet.append(`
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
  return tweet;
}

//loop through the database and prepend each tweet
function renderTweets(data) {
  for (let ele of data) {
    const tweets = createTweetElement(ele);
    $(".tweet-container").prepend(tweets);
  }
}

//function for get request to load tweets on the page
function loadTweets() {
  $.get("/tweets").then(renderTweets);
}

$(document).ready(function() {
  //hide the arrow-to-the-top when only two tweets
  $(".arrow-up").hide();

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
          const numOfTweets = database.length;
          const lastTweet = numOfTweets - 1;
          const newTweet = createTweetElement(database[lastTweet]);
          $(".tweet-container").prepend(newTweet)
          $(this)
            .find(".tweet-msg")
            .val("");
          $(".alert").slideUp(1000);
          //show the arrow when ther are more than 3 tweets
          if (numOfTweets >= 3) {
            $(".arrow-up").fadeIn(1000);
          }
        });
      });
    }
  });

  loadTweets();
});
