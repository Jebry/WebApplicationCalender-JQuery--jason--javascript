 class Today {
        
    //initilize all props in const
    constructor(year, month, day){
        if(arguments.length==3)
        {
            this.year=year;
            this.month=month;
            this.day=day;
        }
        else
        {
        this.time= new Date( Date.now());  // init with curr time
        this.year= this.time.getFullYear(); // 4-digit
        this.month= this.time.getMonth()+1; // 1-based
        this.date= this.time.getDate();     // 1 ~ 31
        this.day= this.time.getDay()+ 1;   // 1-based
        }
    }
    setAllYMD(yearNumber,monthNumber,dayNumber){
        this.year=yearNumber;
        this.month=monthNumber;
        this.day=dayNumber;
    }
    setMonth(monthNumber){
    this.month=monthNumber;
    }
    setYear(yearNumber){
        this.year=yearNumber;
    }
    setDate(dateNumber){
        this.date=dateNumber;
    }
    static getMonthStringByNum(number){
        switch(number){
        case 1:  return "January";
            case 2:  return "February";
            case 3:  return "March";
            case 4:  return "April";
            case 5:  return "May";
            case 6:  return "June";
            case 7:  return "July";
            case 8:  return "August";
            case 9:  return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
        
    }
    static getMonthNumberByString(monthName){
        switch(monthName){
            case "January":   return 1;
            case "February":  return 2;
            case "March":     return 3;
            case "April":     return 4;
            case "May":       return 5;
            case "June":      return 6;
            case "July":      return 7;
            case "August":    return 8;
            case "September": return 9;
            case "October":   return 10;
            case "November":  return 11;
            case "December":  return 12;
            }
    }
    getMonthString(){
        switch(this.month){

            case 1:  return "January";
            case 2:  return "February";
            case 3:  return "March";
            case 4:  return "April";
            case 5:  return "May";
            case 6:  return "June";
            case 7:  return "July";
            case 8:  return "August";
            case 9:  return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        
    }
}
    getPriviousMonthString(){
        if(this.month-1==0){
                
        }
        switch(this.month-1){
            case 0:  return "December";
            case 1:  return "January";
            case 2:  return "February";
            case 3:  return "March";
            case 4:  return "April";
            case 5:  return "May";
            case 6:  return "June";
            case 7:  return "July";
            case 8:  return "August";
            case 9:  return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        
    }
}
    getNextMonthString(){
        switch(this.month+1){

            case 1:  return "January";
            case 2:  return "February";
            case 3:  return "March";
            case 4:  return "April";
            case 5:  return "May";
            case 6:  return "June";
            case 7:  return "July";
            case 8:  return "August";
            case 9:  return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
            case 13: return "December";
    }
}

    getDayString(){
        switch(this.day){
            case 1:return "Sunday";
            case 2:return "Monday";
            case 3:return "Tuesday";
            case 4:return "Wedesday";
            case 5:return "Thursday";
            case 6:return "Friday";
            case 7:return "Saturday";
        }
    }
    getDaysOfMonth(){
       
         let date = new Date(this.year, this.month, 0).getDate();
         return date;
    }
    getDaysOfPrivousMonth(){
       
        let date = new Date(this.year, this.month-1, 0).getDate();
        return date;
   }
   getDaysOfNextMonth(){
       
    let date = new Date(this.year, this.month+1, 0).getDate();
    return date;
}
    getFirstDayOfMonth(){
        
       let date= new Date(this.year, this.month-1, 1).getDay() + 1;
       return date;
    }

}