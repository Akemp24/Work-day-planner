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

      var textarea = document.getElementById("textarea");
      textarea.value = localStorage.getItem("textarea");
      });

     
    


   




  




    // Entering events
    // Saving to local storage
    // doesn't dissapear when refreshing the page



    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $("button").on("click", function(event) {
      var textarea = document.getElementById("textarea");
      localStorage.setItem("textarea", textarea.value);
    }) ;

   


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
  
