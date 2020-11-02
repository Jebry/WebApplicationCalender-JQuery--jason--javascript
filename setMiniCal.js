function setMiniCal(today2){
    $("<img class='mini' src='minCal1.jpg'>").appendTo(".bigContainer");
     $("<div class='container'><img src='arrow.jpg' class='miniLeft'><h1 class='miniYear'>"+today2.year+"</h1><img src='arrow.jpg' class='miniRight'></div>").appendTo(".bigContainer");
      $("<div class='miniCal'></div>").css({
       "display":"grid",       
        "grid-template-columns":"repeat(3,1fr)",      
        "margin":"0px",
        "border-width":"1mm",
        "border-style": "groove",
        "width":"470px",
        "height":"250px"
      }).appendTo(".bigContainer");
      for(let i=1;i<=12;i++){
        $("<div>"+Today.getMonthStringByNum(i)+"</div>").css({
          "border-width":"1mm",
        "border-style": "groove",
        "width":"90%"
        }).appendTo(".miniCal");
      }
      $("<div class='backToToday'><button class='ButtonBackToToday'>BACK TO TODAY</button></div>").appendTo(".bigContainer");
}
