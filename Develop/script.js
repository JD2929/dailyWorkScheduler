




$(function () {



  $(document).ready(function () {

    $("#currentDay").text(dayjs().format('dddd D MMMM, YYYY'))

    for ( var hourToGet = 9; hourToGet < 18; hourToGet++)
    {var idToGet = "hour-" + hourToGet
      var description = localStorage.getItem(idToGet)
      var timeBlock = $("#"+idToGet)
      console.log(timeBlock)
      timeBlock.children("TextArea").val(description) 
    }
    $(".saveBtn").on('click', function () {
      var text = $(this).siblings(".description").val()
      console.log (text)
      var hour = $(this).parent().attr("id")
      console.log(hour)
      localStorage.setItem(hour, text)
    })

//get current hour add one as dayjs uses 0 to 23
    var currentHour = dayjs().hour() +1

    // find all timeBlocks and remove all present/past/future class and set to future
    var timeBlock = $(".time-block");
    timeBlock.removeClass("past")
    timeBlock.removeClass("present") 
    timeBlock.removeClass("future")
    //below will only be updating past and present therefore set to future by default
    timeBlock.addClass("future")

    //loop from the start of the day to hour before present
    for ( var pastHour = 9; pastHour < currentHour; pastHour++){
      //find the timeBlock
      var pastBlock = $("#hour-"+ pastHour)
      console.log (pastBlock)
        //add class past to the timeBlock
        pastBlock.removeClass("future") 
    pastBlock.addClass("past")
    }
    //find timeBlock of present hour
    var presentBlock = $("#hour-"+ currentHour)   
    
    //add class of present to the timeBlock
   presentBlock.removeClass("future")
    presentBlock.addClass("present")
    
  })


})
