/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


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

const renderTweets = function(tweets) {
  // loops through tweets

  const $tweetContainer = $('#tweets-container')
tweets.forEach(function(tweet) {
  const tweetElement = createTweetElement(tweet);
  // takes return value and appends it to the tweets container
  $tweetsContainer.append(tweetElement);
});
};
 

const createTweetElement = function(tweet) {
  const $tweet = $("<article>").addClass("tweet");
  $( "form" ).on( "submit", function() {
    
    return this.some_flag_variable;
  } );
return $tweet;
}

renderTweets(data);



// // Test / driver code (temporary). Eventually will get this from the server.
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

// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


// const $tweet = $(`<article class="tweet">Hello world</article>`);

$(document).ready(function() {
  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/tweets",
      success: function(data) {
        console.log("tweets", data);
      },
      error: function(error) {
        console.error("error:", error);
      }
    });
  }

  loadTweets();
});