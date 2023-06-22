// shorthand for doc.ready
// $(()=>){--code goes here--};
$(document).ready(function() {
  console.log("Ready");

  $("#tweet-text").on("input", function() {
    let inputLength = $(this).val().length;
    console.log(inputLength);
    let charsLeft = 140 - inputLength;

    const $counter = $(this).closest('.container').find('.counter');
    
    if (charsLeft < 0) {
      $counter.addClass("exceeded");
    } else {
      $counter.removeClass("exceeded");
    }

    $counter.text(charsLeft);
  });
});