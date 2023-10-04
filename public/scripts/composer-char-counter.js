//CODE TO DISPLAY THE REMAINING NUMBER OF CHARACTERS

$(document).ready(function() {
  const messageMax = 140;
  $('#tweet-text').on('input', function() {
    const messageLength = $(this).val().length;
    const lettersRemaining = messageMax - messageLength;
    const $counter = $(this).closest('form').find('.counter');
    $counter.text(lettersRemaining);
    
    if (lettersRemaining < 0) {
      $counter.addClass('limit-exceeded');
    } else {
      $counter.removeClass('limit-exceeded');
    }
  });
});

