var currentTime = dayjs().hour();
 // write function for the day
 $("#currentDay").text(dayjs().format("dddd, MMMM D"));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  $(function () {

    // Timeblock past, present, future
    // IF else statement
    // 
    $(".time-block").each(function() {
      console.log($(this).attr("id"));
      var timeblock = parseInt($(this).attr("id"));
      console.log(currentTime);

      if (timeblock < currentTime) {
        $(this).addClass("past");
      } else if (timeblock === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });


     // Entering events
    // Saving to local storage
    // doesn't dissapear when refreshing the page
    // make it save for each time block

      var textarea = document.getElementById("textarea");
      textarea.value = localStorage.getItem("textarea");
      });

     
    


   




  




   



   

    $("button").on("click", function(event) {
      var textarea = document.getElementById("textarea");
      localStorage.setItem("textarea", textarea.value);
    }) ;
