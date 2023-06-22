/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const createTweetElement = (tweetData) => {
  const $tweet = $(`
  
    <article class="tweet">
      <header>
        <span class="user-avi"><img src="${tweetData.user.avatars}"></span><span class="user-name">${tweetData.user.name}</span>
        <span class="handle">${tweetData.user.handle}</span>
      </header>
      <p class="tweet-content">${tweetData.content.text}</p>
      <hr/>
      <footer>
        <span class="days">${tweetData.created_at}</span><span class="icons">
          <i class="fa-solid fa-flag flag"></i>
          <i class="fa-sharp fa-solid fa-retweet retweet"></i>
          <i class="fa-solid fa-heart heart"></i>
        </span>
      </footer>
    </article>
  `);

  return $tweet;
}

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

// doc.ready check before function calls
$(()=> {
  const $tweet = createTweetElement(tweetData);
  
  console.log($tweet);
  console.log($(".tweets-container"))
  $(".tweets-container").append($tweet);
});