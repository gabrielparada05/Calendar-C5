//set variables for btn and div for the time. 

var timeDate = $("#currentDay");
var btn1 = $("#btn1");
var btn2 = $("#btn2");
var h9 = $("#9");
var h10 = $("#10");
var h11 = $("#11");
var h12 = $("#12");
var h13 = $("#13");
var h14 = $("#14");
var h15 = $("#15");
var h16 = $("#16");
var h17 = $("#17");



/// Set local storage save data using onclick button from HTML with the placeholder item
function saveData(item) {
  localStorage.setItem(`${item[0].id}`, item[0].value)
  console.log(item)
}

/// set get data to render info from the local storage in every time block. 
// Use .ready function to execute when the DOM is fully loaded.
$(document).ready(function () {
  function getData() {
    h9[0].innerHTML = localStorage.getItem("9");
    h10[0].innerHTML = localStorage.getItem("10");
    h11[0].innerHTML = localStorage.getItem("11");
    h12[0].innerHTML = localStorage.getItem("12");
    h13[0].innerHTML = localStorage.getItem("13");
    h14[0].innerHTML = localStorage.getItem("14");
    h15[0].innerHTML = localStorage.getItem("15");
    h16[0].innerHTML = localStorage.getItem("16");
    h17[0].innerHTML = localStorage.getItem("17");
  }
  getData();
})

// handle displaying the time and use .ready
$(document).ready(function () {
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    //print the inf in HTML
    timeDate.text(rightNow);
  }
  displayTime()
  setInterval(displayTime, 1000)
})


// Set the new classes for time blocks. They are changing according to the local time
function changeClassByHour() {
  var currentHour = dayjs().hour();
  $(".description").each(function (index) {
    console.log($(this));
    var targetElement = $(this).attr("id");
    if (currentHour < targetElement) {
      $(this).addClass('future');
    } else if (currentHour > targetElement) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }
  })
}

// Call the function using .ready
$(document).ready(function () {
changeClassByHour()})











