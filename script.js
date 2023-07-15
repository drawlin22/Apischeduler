// let nineAm = $('#hour-9')
// let tenAm = $('#hour-10')
// let elevenAm = $('#hour-11')
// let noon = $('#hour-12')
// let onePm = $('#hour-13')
// let twoPM = $('#hour-14')
// let threePm = $('#hour-15')
// let fourPm = $('#hour-16')
// let fivePm = $('#hour-17')

let currentDate = dayjs()
$('#currentDay').text(currentDate.format('dddd, MMMM D YYYY, h:mm:ss a'));

let currentHour = currentDate.format('HH');


document.getElementsByClassName("time-block")

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function pageLoad() {
checkTime()

});

function checkTime() {

  // if currentTime = 
  let timeBlock= document.getElementsByClassName("time-block")


  for (i=0; i < timeBlock.length; i++) {
   let id = parseInt(timeBlock[i].id.split('-')[1])
  
  if (currentHour == id) {
    timeBlock[i].className = 'row time-block present'
  } else if (currentHour > id) {
    timeBlock[i].className = 'row time-block past'
  } else if (currentHour < id) {
    timeBlock[i].className = 'row time-block future'
  };

 
  }
}

function saveInput (event) {
  let timeBlockId = this.parentElement.id;
  let userInput = this.preiousElementSibling.value
  let userInputString = JSON.stringify(userInput)
  localStorage.setItem(timeBlockId, userInput)

console.log (userInput)
  }

function retrieveInput(event) {
  let timeBlockId = this.parentElement.id;
  let userInputString = localStorage.getItem(timeBlockId)
  let userInput = JSON.parse(userInputString)
}

let saveBtn = document.getElementsByClassName('saveBtn')
$("saveBtn").on("click", saveInput)

  // block by comparing the id to the current hour. HINTS: How can the id


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
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
