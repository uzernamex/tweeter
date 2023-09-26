// $(document).ready(function() {
//   $("#tweetForm").on("submit", function(event) {
//     event.preventDefault();
    
//     const tweetData = $(this).serialize();
    
//     $.ajax({
//       type: "POST",
//       url: "http://localhost:8080/"
//       data: tweetData
//       success: function(response) {
//         console.log("response", response);
//       },
//       error: function(error) {
//         console.error("error:", error); 
//       }
//     });
//   });
// });