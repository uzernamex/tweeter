/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// S A M P L E   T W E E T S

const data = [
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


// T W E E T   E L E M E N T S

const createTweetElement = function(tweet) {
  const $tweet = $("<article>").addClass("tweet");
  const $userDetails = $("<div>").addClass("user-details");

  const $avatar = $("<img src=\"" + tweet.user.avatars + "\">").addClass("avatar");
  $userDetails.append($avatar);

  const $nameHandle = $("<div>").addClass("name-handle");
  const $name = $("<p>").text(tweet.user.name);
  const $handle = $("<span>").text(tweet.user.handle);
  
  $nameHandle.append($name, $handle);
  $userDetails.append($nameHandle);

  $tweet.append($userDetails);
  
  // $tweet.append($("<p>").text(tweet.content.text));
  
  const $tweetLine = $("<div>").addClass("tweet-line");
  $tweetLine.append($("<p>").text(tweet.content.text));
  $tweet.append($userDetails);
  $tweet.append($tweetLine);
  
  const $timestamp = $("<time>").addClass("timeago").attr("datetime", new Date(tweet.created_at));
  $tweet.append($timestamp);
  
  const $icons = $("<div>").addClass("tweet-icons");
  const $flagIcon = $("<i>").addClass("fa-solid fa-flag fa-fade");
  const $flagLink = $("<a>").attr("href", "#").append($flagIcon);
  $icons.append($flagLink);
  
  const $retweetIcon = $("<i>").addClass("fa-solid fa-retweet fa-spin");
  const $retweetLink = $("<a>").attr("href", "#").append($retweetIcon);
  $icons.append($retweetLink);
  
  const $heartIcon = $("<i>").addClass("fa-solid fa-heart fa-beat");
  const $heartLink = $("<a>").attr("href", "#").append($heartIcon);
  $icons.append($heartLink);

  $tweet.append($icons);

  
  return $tweet;
};


// F U N C T I O N:   L O A D   T W E E T S   A S Y N C H R O N O U S L Y

const loadTweets = function() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
    dataType: "json",
    success: function(data) {
      renderTweets(data);
    },
    error: function(error) {
      console.error("error:", error);
    },
  });
};


// F U N C T I O N:   R E N D E R   T W E E T S

const renderTweets = function (tweets) {
  const $tweetContainer = $("#tweets-container").empty();
  tweets.forEach(function (tweet) {
    const tweetElement = createTweetElement(tweet);
    $tweetContainer.append(tweetElement);
  });
};


// E V E N T   H A N D L E R

$(document).ready(function() {
  $("time.timeago").timeago();
  const tweetForm = $("#tweetForm");
  tweetForm.on("submit", function (event) {
    event.preventDefault();
    const tweetData = tweetForm.serialize();
    console.log(tweetData);
    
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/tweets",
      contentType: "application/x-www-form-urlencoded",
      data: tweetData,
      success: function(response) {
        loadTweets();
      },
      error: function(error) {
        console.error("error:", error);
      }
    });
  });
// loadTweets();
});

loadTweets();





$(document).ready(function () {
  $("time.timeago").timeago();
});
