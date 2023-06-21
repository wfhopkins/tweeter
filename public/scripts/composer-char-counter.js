// $(document).ready(function() {
//   console.log("Ready")
  
//   $("#tweet-text").on("input", function() {
//     let inputLength = $(this).val().length;
//     console.log(inputLength);
//     let charsLeft = 140 - inputLength;

//     if (charsLeft < 0) {
//       $(".counter").addClass("exceeded");
//     } else {
//       $(".counter").removeClass("exceeded")
//     }

//     let $counter = $(this).closest('.container').find('.counter');
//     $counter.text(charsLeft);
//   });
// });

// Modern shorthand for doc.ready
// $(()=>){--code goes here--};
$(document).ready(function() {
  console.log("Ready");

  $("#tweet-text").on("input", function() {
    let inputLength = $(this).val().length;
    console.log(inputLength);
    let charsLeft = 140 - inputLength;

    if (charsLeft < 0) {
      $(this).closest('.container').find('.counter').addClass("exceeded");
    } else {
      $(this).closest('.container').find('.counter').removeClass("exceeded");
    }

    $(this).closest('.container').find('.counter').text(charsLeft);
  });
});