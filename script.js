let nineAm = $('#hour-9')
let tenAm = $('#hour-10')
let elevenAm = $('#hour-11')
let noon = $('#hour-12')
let onePm = $('#hour-1')
let twoPM = $('#hour-2')
let threePm = $('#hour-3')
let fourPm = $('#hour-4')
let fivePm = $('#hour-5')



let currentDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
$('#currentDay').text(currentDate);

let currentHour = currentDate.hours()

if (currentHour === 9) {
  nineAm.classList.add('present');
} else if (currentHour < 9) {
  nineAm.classList.add('past');
} 
// else (currentHour > 9) {
//   nineAm.classList.add('future');
// };


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function pageLoad() {
checkTime()

});

function checkTime() {

  // if currentTime = 

}

function saveText () {

}


/* if statments  

if time < current time apply class "past" gray

if time === current time apply class "present" red

if time > current time apply class "future" green




//
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


}

function eventSave() {

  /* event listener to save button to save text in local storage using ID*/

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


// /* GIVEN I am using a daily planner to create a schedule
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
