

let currentDate = dayjs()
$('#currentDay').text(currentDate.format('dddd, MMMM D YYYY, h:mm:ss a'));

let currentHour = currentDate.format('HH');


document.getElementsByClassName("time-block")

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function pageLoad() { /* when the page is laoded the check time function as well as the retieveInput fuctions are called */
checkTime()
retrieveInput()
});

function checkTime() { /* checkTime fuction compres the current time to the timeBlocks on the calendar iterating over each ID to change colors */

  
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
  let userInput = this.previousElementSibling.value
  let userInputString = JSON.stringify(userInput)
  localStorage.setItem(timeBlockId, userInput)


  }

  console.log ()

function retrieveInput(event) {
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
}

let saveBtn = document.getElementsByClassName('saveBtn')
$(saveBtn).on("click", saveInput)

  
