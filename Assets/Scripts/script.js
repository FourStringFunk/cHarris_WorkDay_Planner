$(function () {
  // Code displays the current date in the header of the page using
  let currentDay = $("#currentDay");
  currentDay.text(dayjs().format("dddd, MMMM D, YYYY")); 
  
// TODO: Add a listener for click events on the save button.
  const saveButtons = $(".time-block").children("button"); // selects all the button elements that are children of the div class="time-block"

  // on click, saves the event name and ID to local storage
  for(let i = 0; i < saveButtons.length; i++) {
    $(saveButtons[i]).click(function() {
      let userInput = $(saveButtons[i]).parent().children("textarea").val(); // gets the current value of the textarea elements.
      let inputID = $(saveButtons[i]).parent().attr("id"); // gets value of the ID attribute
      localStorage.setItem(inputID, userInput); // applies the values captured for userInput and inputID into local storage
    });
  }

  // get items from local storage on page load and append values to text area
  for (let i = 0; i < 25; i++) { // when the numerical value after the "hour-" key is less than 25--within 24 hours military time, run the for loop
    try {
      if(localStorage.getItem("hour-" + i) !== null) // if the numerical value after "hour-" key isn't null...
        $("#hour-" + i).children("textarea").val(localStorage.getItem("hour-" + i)); // ...then apply append the textarea value from localStorage to the textarea
    } catch (err) { // console log an error if applicable
      console.log(err);
    }
  }

// TODO: Add code to apply the past, present, or future class to each time
// Change class by comparing the hour in the id to the current hour 
  for (let i = 0; i < 25; i++) { // run the for loop when i is less than 25
    console.log("inside past loop")
    var currentHour = dayjs().hour(); // set the variable currentHour to the current our of the day using day.js
    if (localStorage.getItem("hour-" + i) < currentHour) { // if id "hour-" number is less than current hour, apply "past" class
      console.log("inside past");
      $(".time-block").addClass("past");
    } else {
      // add conditional future
    } else {
      // add conditional for present
    }
  }
  


});


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?