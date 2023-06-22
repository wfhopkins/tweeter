/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet) => {
  const $tweet = $(`
  
    <article class="tweet">
      <header>
        <span class="user-avi"><img src="${tweet.user.avatars}"></span><span class="user-name">${tweet.user.name}</span>
        <span class="handle">${tweet.user.handle}</span>
      </header>
      <p class="tweet-content">${tweet.content.text}</p>
      <hr/>
      <footer>
        <span class="days">${tweet.created_at}</span><span class="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-sharp fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </span>
      </footer>
    </article>
  `);

  return $tweet;
};


const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".tweets-container").append($tweet);
  }
};




const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
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
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1687291163676
  }
];

// doc.ready check before function calls
$(()=> {
  renderTweets(data);
});