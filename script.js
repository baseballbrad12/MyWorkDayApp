var CurrTime = moment().format('MMMM Do YYYY, h:mm:ss a');

$(document).ready(displayToday(CurrTime));

function displayToday(){
    var eCurrentTime = document.getElementById("todayDate");
    eCurrentTime.textContent = CurrTime;
};

$(document).ready(ConditionalBackground());

function ConditionalBackground(){
    var currHour = moment().hour();
    var HoursArray = [9,10,11,12,13,14,15,16,17];
    var inputNum = 1
    
    for (let i = 0; i < HoursArray.length;) {
        var SetHours = HoursArray[i++]
        
        currentBack = document.getElementById("Back"+inputNum)

        if(currHour <= SetHours){
            currentBack.style.backgroundColor="lightgreen";;
        }else{
            currentBack.style.backgroundColor="pink";;
        }
        inputNum++;
    };
    console.log(currHour)
};


