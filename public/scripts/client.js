/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// doc.ready check before function calls
$(()=> {
  // renderTweets(data);
  $("form").on("submit", onSubmit);
  loadTweets();
});

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
  $(".tweets-container").empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".tweets-container").prepend($tweet);
  }
};


const loadTweets = function() {
  $.ajax({
    url: "http://localhost:8080/tweets",
    method: "GET",
    success: function(tweets) {
      console.log("Success: ", "tweets: ", tweets);
      renderTweets(tweets);
  },
    error: function(error) {
      console.log("Error: ", error);
    }
  })
}


const onSubmit = function(event) {
  event.preventDefault();
  $.ajax({
    url: "http://localhost:8080/tweets",
    method: "POST",
    data: $(this).serialize(),
    success: (data) => {
      console.log("this request was a success")
      loadTweets();
    },
    error: (error) => {
      console.log("this request failed, here is the error", error)
    },
  });
}