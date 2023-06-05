$(document).ready(function () {
  const currentDay = dayjs().format("dddd, MMM D, YYYY");
  const currentTime = dayjs().format("hh:mm:ss");
  var currentHour = dayjs().hour();
  $("#currentDay").text(currentDay);
  $("#currentTime").text(currentTime);

  function saveEvent() {
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
    localStorage.setItem(key, value)
  }

  $(".btn").on("click", saveEvent);

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  for (var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }
});
