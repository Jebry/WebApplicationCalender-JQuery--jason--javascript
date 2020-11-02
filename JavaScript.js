

// Bashar Jebry
//June 11,2020
//Jebry@sheridancollege.ca
//This the programing part of the web page 

window.matchMedia("(max-width: 2000px)").addListener(function () {

  let tags = document.getElementsByClassName("days");
  var x = window.matchMedia("(max-width: 2000px)");
  if (x.matches) {
    tags[0].innerHTML = "SUN";
    tags[1].innerHTML = "MON";
    tags[2].innerHTML = "TUS";
    tags[3].innerHTML = "WED";
    tags[4].innerHTML = "THU";
    tags[5].innerHTML = "FRI";
    tags[6].innerHTML = "SAT";
  }
  else {
    tags[0].innerHTML = "Sunday";
    tags[1].innerHTML = "Monday";
    tags[2].innerHTML = "Tusday";
    tags[3].innerHTML = "Wedesday";
    tags[4].innerHTML = "Thursday";
    tags[5].innerHTML = "Friday";
    tags[6].innerHTML = "Saturday";
  }
});


document.addEventListener("DOMContentLoaded", function () {
  let today1 = new Today();
  let currentDay = new Today();
  
  $(".right").on("click", function () {
    let currentMonth = today1.month;
    let currentYear = today1.year;
    currentMonth += 1;
    if (currentMonth == 13) {
      currentMonth = 1;
      currentYear += 1;
    }

    if (today1.date == today1.getDaysOfMonth() & today1.getDaysOfMonth() != today1.getDaysOfNextMonth()) {
      currentMonth += 1;
      today1.setDate(1);
    }
    today1.setYear(currentYear);
    today1.setMonth(currentMonth);
    removeAndClean();
    getJasonObject(today1);

  });
  $(".left").on("click", function () {
    let currentMonth = today1.month;
    let currentYear = today1.year;
    currentMonth -= 1;
    if (currentMonth == 0) {
      currentMonth = 12;
      currentYear -= 1;
    }
    if (today1.date == today1.getDaysOfMonth() & today1.getDaysOfMonth() != today1.getDaysOfPrivousMonth()) {
      currentMonth -= 1;
      today1.setDate(1);
    }
    today1.setYear(currentYear);
    today1.setMonth(currentMonth);
    removeAndClean();
    getJasonObject(today1);

  });


  getJasonObject(today1);

  let today2 = new Today(today1.year, today1.month, today1.day);
  setMiniCal(today2);

  $(".down").on("click", function () {
    today2.year = today1.year;
    today2.month = today1.month;

    let cleanOldMiniYear = $(".bigContainer .container .miniYear");
    cleanOldMiniYear.empty();
    cleanOldMiniYear.append(today2.year);

    $(".bigContainer").toggle();
  });


  $(".miniLeft").on("click", function () {
    today2.year -= 1;

    let cleanOldMiniYear = $(".bigContainer .container .miniYear");
    cleanOldMiniYear.empty();
    cleanOldMiniYear.append(today2.year);


  });
  $(".miniRight").on("click", function () {
    today2.year += 1;
    let cleanOldMiniYear = $(".bigContainer .container .miniYear");
    cleanOldMiniYear.empty();
    cleanOldMiniYear.append(today2.year);

  });


  $(".miniCal > div").on("click", function () {

    let selectedMonth = $(this);
    removeAndClean();
    today2.month = Today.getMonthNumberByString(selectedMonth.text());
    today1.setAllYMD(today2.year,today2.month,today2.day);

    $(".bigContainer").toggle();
    getJasonObject(today2);
  });

  
  $(".bigContainer .backToToday .ButtonBackToToday").on("click", function () {
    removeAndClean();
    $(".bigContainer").toggle();
    getJasonObject(currentDay);
  });

 
});
