// TWEET INFORMATION FOR USERS
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


// TWEET ELEMENTS:
const createTweetElement = function(tweet) {
  const $tweet = $("<article>").addClass("tweet");
  const $userDetails = $("<div>").addClass("user-details");

// APPEND AN IMAGE FOR A USER
  const $avatar = $("<img src=\"" + tweet.user.avatars + "\">").addClass("avatar");
  $userDetails.append($avatar);

// ATTACH THE NAME AND HANDLE FOR THE USER
  const $nameHandle = $("<div>").addClass("name-handle");
  const $name = $("<p>").text(tweet.user.name);
  const $handle = $("<span>").text(tweet.user.handle);
  
  $nameHandle.append($name, $handle);
  $userDetails.append($nameHandle);
  $tweet.append($userDetails);

// ADD THE USER'S TWEET CONTENT
  const $tweetLine = $("<div>").addClass("tweet-line").append($("<p>").text(tweet.content.text));
  $tweet.append($tweetLine);

// FORMAT AND DISPLAY THE TIME A TWEET WAS CREATED
  const $timestamp = $("<div>").addClass("timeago").text(timeago.format(tweet.created_at));
  $tweet.append($timestamp);
  
// ADD THE REACTION BUTTONS ('FLAG', 'RETWEET', 'LIKE')
  const $icons = $("<div>").addClass("tweet-icons");
  const $flagIcon = $("<i>").addClass("fa-solid fa-flag fa-fade ");
  const $retweetIcon = $("<i>").addClass("fa-solid fa-retweet fa-spin ");
  const $heartIcon = $("<i>").addClass("fa-solid fa-heart fa-beat ");
  $icons.append(
    $("<a>").attr("href", "#").append($flagIcon),
    $("<a>").attr("href", "#").append($retweetIcon," "),
    $("<a>").attr("href", "#").append($heartIcon, " ")
  );
  $tweet.append($icons);
  
  return $tweet;
};

// FUNCTION: RENDER TWEETS - EMPTY THE TWEET CONTAINER, THEN DISPLAY TWEETS BEGINNING WITH THE MOST RECENT
const renderTweets = function(tweets) {
  const $tweetContainer = $("#tweets-container").empty();
  tweets.reverse();
  tweets.forEach(function(tweet) {
    const tweetElement = createTweetElement(tweet);
    $tweetContainer.append(tweetElement);
  });
};

// FUNCTION: LOAD TWEETS ASYNCHRONOUSLY [W/ AJAX]
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

// DISPLAY AN ERROR MESSAGE FOR AN EMPTY TWEET
const showErrorEmpty = function(message) {
  const $errorAlert1 = $(".error-alert-empty");
  $errorAlert1.text(message).slideDown();
};
const hideError = function() {
  const $errorAlert = $(".error-alert");
  $errorAlert.text("").slideUp();
};
//DISPLAY AN ERROR MESSAGE IF THE TWEET IS MORE THAN 140 CHARACTERS
const showErrorOverkill = function(message) {
  const $errorAlert2 = $(".error-alert-overkill");
  $errorAlert2.text(message).slideDown();
};

// TWEET SUBMISSION
const hideErrorMessage = function() {
  $(".error-alert-empty").slideUp();
  $(".error-alert-overkill").slideUp();
  $(".error-alert").slideUp();
};

$("#tweet-text").on("click", function() {
  hideErrorMessage();
});

const submitTweet = function() {
  const tweetContent = $("#tweet-text").val();
  if (!tweetContent) {
    showErrorEmpty("Alert: Message cannot be empty.");
    $("#tweet-text").on("click", function() {
      hideErrorMessage();
    });
  } else if (tweetContent.length > 140) {
    showErrorOverkill("Alert: Message is way too long to post here!");
  } else {
    const tweetData = $("#tweetForm").serialize();
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/tweets",
      contentType: "application/x-www-form-urlencoded",
      data: tweetData,
      success: function(response) {
        document.getElementById("char-counter").textContent = "140";
        $("#tweet-text").val("");
        hideError();
        loadTweets();
      },
      error: function(error) {
        console.error("error:", error);
      },
    });
  }
};

$(document).ready(function() {
  const $tweetText = $("#tweet-text");
  const $counter = $tweetText.siblings(".buttons").find(".counter");
  $counter.text(140);
  
  const tweetForm = $("#tweetForm");

  $("#tweetForm").on("keydown", function() {
    hideErrorMessage();
  });
  
  tweetForm.on("submit", function(event) {
    event.preventDefault();
    submitTweet();
  });
  loadTweets();
  $("time.timeago").timeago();
});