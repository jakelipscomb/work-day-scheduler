// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




$(".time-block").each(function () {
  var blockHour = $(this).attr("id").split("-")[1];

  if (blockHour < currentHour) {
    $(this).addClass('past');
  } else if (blockHour === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});

var currentHour = dayjs().hour();

function init() {
  var hour9 = localStorage.getItem("hour9");
  $("#hour-9").text(hour9);
  var hour10 = localStorage.getItem("hour10");
  $("#hour-10").text(hour10);
  var hour11 = localStorage.getItem("hour11");
  $("#hour-11").text(hour11);
  var hour12 = localStorage.getItem("hour12");
  $("#hour-12").text(hour12);
  var hour13 = localStorage.getItem("hour13");
  $("#hour-13").text(hour13);
  var hour14 = localStorage.getItem("hour14");
  $("#hour-14").text(hour14);
  var hour15 = localStorage.getItem("hour15");
  $("#hour-15").text(hour15);
  var hour16 = localStorage.getItem("hour16");
  $("#hour-16").text(hour16);
  var hour17 = localStorage.getItem("hour17");
  $("#hour-17").text(hour17);
}

$("#current-day").text(dayjs().format("dddd, MMMM D, YYYY"));

$(function () {
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
});

function saveEvent(event) {
  var textArea = event.target.parentElement.querySelector(".description");
  localStorage.setItem(textArea.class, textArea.value);
}

$(".btn").on("click", saveEvent());

init();
