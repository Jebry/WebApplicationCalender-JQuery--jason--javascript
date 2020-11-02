
 function getJasonObject(today1){
  var noHolidaysYear= today1.year;
  let checkTheUploadingCalender=true;
   let jasonObject={};
   let noHolidaysYearObject={"holidays":{
                                     "year":
                                            {1000:
                                                    {"1":
                                                            {"1":""}
                                                    }
                                            }
                                   }
                        };
   
    
    
   loadFile("holidays.Json").then(data=>
    {
     var json = JSON.parse(data); 
     jasonObject.holidays=json;
  
     getCalender(today1,jasonObject);
     addPersonalEvents();
    }).catch(()=>{
   alert("Sorry, No Holidays available for this year, Click Ok to show the dates without holidyies");
   checkTheUploadingCalender=false;
    }).finally(()=>{
    if(checkTheUploadingCalender==false){       
        getCalender(today1,noHolidaysYearObject);
        addPersonalEvents();
    }
    });
     
}




function loadFile(url)
{
    // return promise object
    return new Promise((resolve, reject) =>
    {
        let xhr = new XMLHttpRequest();
        // init
        xhr.open("GET", url);
        //xhr.responseType = "text"; // text, json, blob ...

        // send it async
        xhr.send();

        // add events for async loading
        xhr.onload = () =>
        {
            if(xhr.status == 200) // OK
            {
                resolve(xhr.response);
            }
            else
            {
                reject("[ERROR] Failed to load: " + url);
            }
        };
        xhr.onerror = () =>
        {
            reject("[ERROR] Failed to load: " + url);
        };
    });
}


