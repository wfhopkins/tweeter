// doc.ready check before function calls
$(()=> {

const createTweetElement = (tweet) => {
  const $tweet = $(`
  
    <article class="tweet">
      <header>
        <span class="user-avi"><img src="${tweet.user.avatars}"></span><span class="user-name">${tweet.user.name}</span>
        <span class="handle">${tweet.user.handle}</span>
      </header>
      <p class="tweet-content">${escape(tweet.content.text)}</p>
      <hr/>
      <footer>
        <span class="days">${timeago.format(tweet.created_at)}</span><span class="icons">
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
    url: "/tweets",
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
  const tweetText = $("#tweet-text").val().trim();
  $(".error-popup").slideUp();
  event.preventDefault();
  if (tweetText.length === 0) {
    $(".error-text").text("Tweet cannot be empty");
    $(".error-popup").slideDown({start: function(){
      $(this).css({
        display: "flex"
      })
    }});
    return;
  }
  if (tweetText.length > 140) {
    $(".error-text").text("Tweet is over 140 characters");
    $(".error-popup").slideDown({start: function(){
      $(this).css({
        display: "flex"
      })
    }});
    return;
  }
  $.ajax({
    url: "/tweets",
    method: "POST",
    data: $(this).serialize(),
    success: (data) => {
      $("#tweet-text").val("");
      $(".counter").text(140) 
      console.log("this request was a success")
      loadTweets();
    },
    error: (error) => {
      console.log("this request failed, here is the error", error)
    },
  });
}

// Protects from running code input by user
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};



$("form").on("submit", onSubmit);
loadTweets();
});