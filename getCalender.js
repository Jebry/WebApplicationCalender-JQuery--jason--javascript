function getCalender(today1, jasonObject) {


  let monthNum = Today.getMonthStringByNum(today1.month);
  let header = $(".header .date");
  x = today1.getDayString();
  y = today1.getMonthString();
  var para = document.createElement("h3");
  para.innerHTML = x + "/" + y + "/" + today1.year;
  header.empty();
  header.append(para);
  let gridParent = $("#gridParent");
  let numberOfDays = today1.getFirstDayOfMonth();
  let monthgridParent = "";
  let i;
  let sequence = 1;
  let previousMonth = today1.month - 1;
  for (i = today1.getDaysOfPrivousMonth() - (numberOfDays - 2); i <= today1.getDaysOfPrivousMonth(); i++) {
    if (sequence == 1) {
      let personalEvent = getStoredLocalPersonalEvent(today1.year, monthNum, i);
      let eve = getHolidays(today1.year, previousMonth, i, jasonObject);


      gridParent.append("<div id='daysNumbers' style='background-color:blue;'>"
        + today1.getPriviousMonthString()
        + i + eve + " " + personalEvent + "</div>");
    }
    else {
      let personalEvent = getStoredLocalPersonalEvent(today1.year, monthNum, i);
      let eve = getHolidays(today1.year, previousMonth, i, jasonObject);


      gridParent.append("<div id='daysNumbers' style='background-color:blue;'>" + i + eve + " " + personalEvent + "</div>");
    }

    sequence++;
  }
  for (i = 1; i <= today1.getDaysOfMonth(); i++) {
    if (i == today1.date) {
      let personalEvent = getStoredLocalPersonalEvent(today1.year, monthNum, i);
      let eve = getHolidays(today1.year, today1.month, i, jasonObject);
      gridParent.append("<div id='daysNumbers' style='background-color:brown;'>" + i + eve + personalEvent + "</div>");
    }
    else {
      let personalEvent = getStoredLocalPersonalEvent(today1.year, monthNum, i);

      let eve = getHolidays(today1.year, today1.month, i, jasonObject);

      gridParent.append("<div id='daysNumbers' class='" + sequence + "' style='background-color:red;'>" + i + eve + " " + personalEvent + "</div>");
      if (eve != "") {
        $("." + sequence).css({
          "background-color": "orange",
          "border-width": "0.01mm",
          "border-color": "black",
          "border-style": "groove"
        }
        );
      }
    }
    sequence++;
  }
  var count = sequence;
  let nextMonthRow;
  if (sequence > 36) {
    nextMonthRow = 42
  }
  else {
    nextMonthRow = 35;
  }
  let nextMonth = today1.month + 1;
  for (i = 1; sequence <= nextMonthRow; i++) {
    if (count == sequence) {
      let personalEvent = getStoredLocalPersonalEvent(today1.year, monthNum, i);
      let eve = getHolidays(today1.year, nextMonth, i, jasonObject);
      gridParent.append("<div id='daysNumbers' style='background-color:blue';>" + i + " " + today1.getNextMonthString() + eve + personalEvent + "</div>");
    }
    else {
      let personalEvent = getStoredLocalPersonalEvent(today1.year, monthNum, i);
      let eve = getHolidays(today1.year, nextMonth, i, jasonObject);
      gridParent.append("<div id='daysNumbers' style='background-color:blue;'>" + i + eve + personalEvent + "</div>");
    }
    sequence++;
  }
}


function removeAndClean() {
  let cleanOldDivs = $("#gridParent #daysNumbers");

  for (let cleanOldDiv of cleanOldDivs) {
    cleanOldDiv.remove();
  }
}