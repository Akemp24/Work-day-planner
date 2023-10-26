
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// app works correctly by running JS code after HTML loads
  $(function () {
    // getting current time using dayjs library
    var currentTime = dayjs().hour();
    // write function for the day
    // sets content of the element to the current date in the format of day of week, month, day
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

    // Timeblock past, present, future
    
    // using JQuery to loop through all elements with the class time block
    $(".time-block").each(function() {
      console.log($(this).attr("id"));
      // get the id of the current timeblock which represents a time
      // parseInt to convert string to integer
      var timeblock = parseInt($(this).attr("id"));
      console.log(currentTime);

      // IF else statement to determine if timeblock is past, present, or future
      if (timeblock < currentTime) {
        $(this).addClass("past");
      } else if (timeblock === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });

    // delegation for saving textareas
    // event listener for save button
    $(document).on("click", ".saveBtn", function(event) {
      // finds closest time block to the clicked button
      var parentBlock = $(this).closest(".time-block");
      var textarea = parentBlock.find("textarea");
      // getting value of text area and id of time block
      var text = textarea.val();
      var id = parentBlock.attr("id");
      // saving text area to local storage
      localStorage.setItem("textarea" + id, text);
    });

    // load textareas from local storage
    $(".time-block").each(function() {
      // gets saved text based on id and sets value to saved text
      // saves when refreshing page
      var id = $(this).attr("id");
      var savedText = localStorage.getItem("textarea" + id);
      var textarea = $(this).find("textarea");
      textarea.val(savedText);
    });

    //   var textarea = document.getElementById("textarea");
    //   textarea.value = localStorage.getItem("textarea");
    //   });


    // $("button").on("click", function(event) {
    //   var textarea = document.getElementById("textarea");
    //   localStorage.setItem("textarea", textarea.value);
    }) ;
