// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDate = $("#currentDay");
var btn1 = $("#btn1");
var btn2 = $("#btn2");
var h9 = $("#9am")
var h10 = $("#10am")


function saveData (item) {
  localStorage.setItem(`${item[0].id}`, item[0].value)
  //console.log(item[0].id + " 9am")
}

$(document).ready (function(){
  function getData(){
    h9[0].innerHTML = localStorage.getItem("9am");
    h10[0].innerHTML = localStorage.getItem("10am");
  }
  getData();
})

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDate.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

function ControlDate () {
var controlTime = dayjs().format("h");
setInterval(1000);
console.log(ControlDate);
}


  
$(btn1).on("click",function(){
  ///saveData()
})


  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

