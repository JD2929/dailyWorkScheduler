

$("#currentDay").text(dayjs().format('dddd D MMMM, YYYY'))



$(function () {



  $(document).ready(function () {


    $(".saveBtn").on('click', function () {
      var text = $(this).siblings('.description').val()
      var hour = $(this).parent().attr("id")
    
      localStorage.getItem(hour,text)
    })


    var currentTime = dayjs().hour

    var timeBlock = $(".time-block").attr("class");
    var past = $(".past").attr("class");
    var present = $(".present").attr("class");
    var future = $(".future").attr("class");

    if (timeBlock < currentTime) function past() {
      $('timeBlock')
        .removeClass(past)
        .addClass(future)
    } else if (timeBlock = currentTime) function present() {
      $('timeBlock')
        .removeClass('future')
        .addClass('present')
    } else function future() {
      $('timeBlock') = ('future')
    }
  })




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

})
