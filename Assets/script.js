
// Updates timeblocks as past, present, future based on dayjs time
function handleTimeCheck() {

  //get current hour add one as dayjs uses 0 to 23
  var currentHour = dayjs().hour() + 1;

  //CLEAR EXISTING
  // find all timeBlocks and remove all present/past/future class and set to future
  var timeBlock = $(".time-block");
  timeBlock.removeClass("past");
  timeBlock.removeClass("present");
  timeBlock.removeClass("future");

  //FUTURE UPDATES  
  //below will only be updating past and present therefore set to future by default
  timeBlock.addClass("future");

  // PAST UPDATES
  //loop from the start of the day to hour before present
  for (var pastHour = 9; pastHour < currentHour; pastHour++) {
    //find the timeBlock
    var pastBlock = $("#hour-" + pastHour);
    //add class past to the timeBlock
    pastBlock.removeClass("future");
    pastBlock.addClass("past");
  }

  // PRESENT UPDATE
  //find timeBlock of present hour
  var presentBlock = $("#hour-" + currentHour);
  presentBlock.removeClass("future");
  //add class of present to the timeBlock
  presentBlock.addClass("present");

}


$(function () {


  //jQuery function to ensure that the entire DOM is setup and ready before executing the code
  $(document).ready(function () {


    //TIMEBLOCK DISPLAY

    //setting an interval to update display as time passes during the day
    setInterval(handleTimeCheck, 5000);
    //call the check once to set up initial load
    handleTimeCheck();

    //DATE DISPLAY 

    //setting the current day from dayjs
    $("#currentDay").text(dayjs().format('dddd D MMMM, YYYY'));

    // GET STORED APPOINTMENTS

    //loop on all availble hours
    for (var hourToGet = 9; hourToGet < 18; hourToGet++) {
      var idToGet = "hour-" + hourToGet;
      var description = localStorage.getItem(idToGet);
      var timeBlock = $("#" + idToGet);
      timeBlock.children("TextArea").val(description);
    }

    //SETUP HANDLER FOR STORING APPOINTMENTS
    //to save to local storage when the save button is clicked
    $(".saveBtn").on('click', function () {
      var text = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");
      localStorage.setItem(hour, text);
    })

  })

})
