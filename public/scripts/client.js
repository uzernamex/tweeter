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
      "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
$(document).ready(function() {
  const createTweetElement = function(tweet) {
    const $tweet = $("<article>").addClass("tweet");
    $tweet.append($"<p>").text;
    return $tweet;
  }
  
  const renderTweets = function(tweets) {
    const $tweetContainer = $('#tweets-container')
    tweets.forEach(function(tweet) {
    const tweetElement = createTweetElement(tweet);
    $tweetsContainer.append(tweetElement);
  });
};

const loadTweets = function() {
    
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
    success: function(data) {
      renderTweets(data);
      console.log("tweets", data);
    },
    error: function(error) {
      console.error("error:", error);
    }
  });
}
//loadTweets();


("#tweetForm").on("submit", function(event) {
  event.preventDefault();
  
  const tweetData = $(this).serialize();
  
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/"
    data: tweetData
    success: function(response) {
      console.log("response", response);
    },
    error: function(error) {
      console.error("error:", error); 
    }
  });
});
});

format(date[, locale = 'en_US', opts])

import { format } from 'timeago.js';

// format timestamp
format(1544666010224);

// format date instance
format(new Date(1544666010224));

// format date string
format('2018-12-12');

// format with locale
format(1544666010224, 'zh_CN');

// format with locale and relative date
format(1544666010224, 'zh_CN', { relativeDate: '2018-11-11' });

// e.g.
format(Date.now() - 11 * 1000 * 60 * 60); // returns '11 hours ago'


///////////


// $(document).ready(function() {
//   const $tweet = createTweetElement(tweetData);
//   $('#tweets-container').append($tweet); 
 
// });
