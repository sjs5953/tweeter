/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }


function createTweetElement(obj) {
  const name = obj.user.name;
  const avatars = obj.user.avatars;
  const handle = obj.user.handle;
  const text = obj.content.text;

  const fullDate = new Date(obj.created_at)
  const year = fullDate.getFullYear()
  const month = fullDate.getMonth();
  const date = fullDate.getDate()

  const time = `${month}.${date}.${year}`;

  let $tweet = $('<article>').addClass('tweets');
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
        <p>${text}</p>
      </section>

      <footer>
        <p>${fullDate}</p>
        <p>@@@</p>
      </footer>


    `)
    return $tweet;
}

function renderTweets(data) {
  for (let ele of data) {
    const tweets = createTweetElement(ele);
    $('.tweet-container').append(tweets); 
  }  
}

renderTweets(data)







});