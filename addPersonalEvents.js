function addPersonalEvents(){
  //localStorage.clear();
    $("#gridParent #daysNumbers").on("click", function () {
  
        let dayEvent = $(this);
        let yearMonthEvent= $(".header .date");
     
       let yearMonth = yearMonthEvent.text().split("/");
       dateOfEvent=yearMonth[2]+" "+ yearMonth[1]+" "+dayEvent.text();
       var yourEvent = prompt("Write the event of yours");
       dayEvent.append("<br>"+yourEvent);
      
        localStorage.setItem(dateOfEvent, yourEvent);
       
      });
  }

  function getStoredLocalPersonalEvent(year, month, day){
      let theEvent="";
    Object.keys(localStorage).forEach(function(key){
        let eventDate=key;
        
        let splitsEventDate=eventDate.split(" ");
       
        

        if(splitsEventDate[0] == year& splitsEventDate[1]==month & splitsEventDate[2]==day)
        {
           
             theEvent= localStorage.getItem(key);
            
        }
       
     });
   return theEvent;
  }