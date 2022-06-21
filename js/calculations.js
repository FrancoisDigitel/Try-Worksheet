let checkboxes = document.getElementsByClassName("work");
let timeTextbox = document.getElementsByClassName("time");
var checkBoxarray =[];
let timeTxtArray = [];
var totalMins = 0;
var totalHours = 0;



























// functions / Funktionen
function setArrays(){
    for(var i = 0; i < checkboxes.length; i++) {
        checkBoxarray.push(checkboxes[i])
    }
    for(var i = 0; i < timeTextbox.length; i++) {
        timeTxtArray.push(timeTextbox[i])
    }
}


function calculateTotalTime(){
    for (var i = 0; i < timeTextbox.length; i++) {
        if (timeTxtArray[i].value != 0) {
            totalMins += parseInt(timeTxtArray[i].value);
        }
    }
    if (totalMins >= 60 || totalMins == 60) {
        totalHours += totalMins / 60;
        totalMins = totalMins % 60;
    }
    
    
    if (totalMins < 10) {
    
        document.getElementById("TTime").value = parseInt(totalHours) + ":" + "0" + parseInt(totalMins);
    
    
    }
    else if (totalMins == 0) {
        document.getElementById("TTime").value = parseInt(totalHours) + ":" + "00";
    
    }
    else {
        document.getElementById("TTime").value = parseInt(totalHours) + ":" + parseInt(totalMins);
    
    
    
    }
    totalMins = 0;
    totalHours = 0
    
    
}


