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
  var currentHour = dayjs().hour(); // set the variable currentHour to the current our of the day using day.js
  var timeINT = document.querySelectorAll('.time');


  for (let i = 0; i < 25; i++) { // run the for loop when i is less than 25
    var timeINTValue = $(timeINT[i]).text(); // pull the value of the time from the timeINT variable

    // applies different classes based on wether the value in the div class "time" is less than, greater than, or equal to and applies the appropriate class.
    if (timeINTValue < currentHour) {
        $(timeINT[i]).parent().addClass("past");
      } 
    else if (timeINTValue > currentHour) {
        $(timeINT[i]).parent().addClass("future");
      }
    else {
        $(timeINT[i]).parent().addClass("present");
      }
    }



  })