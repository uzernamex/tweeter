/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const tweetData = {
//   user: {
//     name: "Newton",
//     avatars: "https://i.imgur.com/73hZDYK.png",
//     handle: "@SirIsaac",
//   },
//   content: {
//     text: "If I have seen further it is by standing on the shoulders of giants",
//   },
//   created_at: 1461116232227,
// };


const tweet = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = function (tweets) {
  const $tweetContainer = $("#tweets-container");
  tweets.forEach(function (tweet) {
    const tweetElement = createTweetElement(tweet);
    $tweetContainer.append(tweetElement);
  });
};
  
// $tweet.append($(tweet.user.avatars));


const createTweetElement = function (tweet) {




  const $tweet = $("<article>").addClass("tweet");

  $tweet.append($("<p>").text(tweet.content.text));
  $tweet.append($("<p>").text(tweet.user.name));
  $tweet.append($("<p>").text(tweet.user.handle));

  // const date = new Date(tweet.created_at);
  // $tweet.append($("<p>").text($.timeago(date)));
 
  // const timeAgo = tweet.created_at;
  // $tweet.append($("<p>").text(timeAgo));
  // $tweet.append($("<p>").text(tweet.created_at));
  // $tweet.append($("<p>").text(timeAgo.tweet.created_at));
  // $tweet.append($(tweet.created_at));
  // $tweet.append($("<p>").text(tweet.$(datetime)));
  return $tweet;
};

$(document).ready(function () {});

const loadTweets = function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
    dataType: "json",
    success: function (data) {
      renderTweets(data);
    },
    error: function (error) {
      console.error("error:", error);
    },
  });
};

loadTweets();

$(document).ready(function () {
  const tweetForm = $("#tweetForm");
  tweetForm.on("submit", function (event) {
    event.preventDefault();
    const tweetData = {/////////look for tweetData
  tweetText: $("#tweetText").val()
};
$.ajax({
  type: "POST",
  url: "http://localhost:8080/tweets",
  contentType: "application/json",
  data: JSON.stringify(tweetData),
  success: function (response) {
    console.log("response", response);
  },
  error: function (error) {
    console.error("error:", error);
  },
});
});
})