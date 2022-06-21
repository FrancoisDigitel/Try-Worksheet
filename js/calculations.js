
// different class elements
let checkboxes = document.getElementsByClassName("work");
let timeTextboxes = document.getElementsByClassName("time");
let MachineTxtBoxes = document.getElementsByClassName("Machine");
let quantityTextboxes = document.getElementsByClassName("Quantity");
let priceTextboxes = document.getElementsByClassName("Price");

// Arrays
var checkBoxarray =[];
var timeTxtArray = [];
var MachineArray = [];
var quantityArray = [];
var priceArray = [];

// Time variable
var totalMins = 0;
var totalHours = 0;


// functions / Funktionen
function setArrays(){
    
    for(var i = 0; i < checkboxes.length; i++) {
        checkBoxarray.push(checkboxes[i])
    }
    for(var i = 0; i < timeTextboxes.length; i++) {
        timeTxtArray.push(timeTextboxes[i])
    }
    for(var i = 0; i < MachineTxtBoxes.length; i++) {
        MachineArray.push(MachineTxtBoxes[i])
    }
    for(var i = 0; i < quantityTextboxes.length; i++) {
        quantityArray.push(quantityTextboxes[i])
    }
    for(var i = 0; i < priceTextboxes.length; i++) {
        priceArray.push(priceTextboxes[i])
    }
}


function calculateTotalTime(){

    for (var i = 0; i < timeTextboxes.length; i++) {
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


function addMachine(number){

    switch (number) {
        case 1:
            if(checkBoxarray[0].checked == true)
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "/") {
                        MachineArray[i].value = "Tondeuse";
                        break;
                    }
                }
            else{
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "Tondeuse") {
                            MachineArray[i].value = "/";       
                        break; 
                        }
                    }
                    if(timeTxtArray[0].value != " ") {
                        timeTxtArray[0].value = " ";
                    }
                }
            break;

        case 2:
            if(checkBoxarray[1].checked == true)
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "/") {
                        MachineArray[i].value = "Débrouss";
                        break;
                    }
                }
            else{
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "Débrouss") {
                        MachineArray[i].value = "/";
                        break;
                    }
                }
                if(timeTxtArray[1].value != " ") {
                    timeTxtArray[1].value = " ";
                }
            }
            break;
        case 3:
            if(checkBoxarray[3].checked == true)
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "/") {
                        MachineArray[i].value = "Taille-Haie";
                        break;
                    }
                }
            else{
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "Taille-Haie") {
                        MachineArray[i].value = "/";
                        break;
                    }
                }
                if(timeTxtArray[3].value != " ") {
                    timeTxtArray[3].value = " ";
                }
            }
            break;
        case 4:
                if(checkBoxarray[4].checked == true)
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "/") {
                            MachineArray[i].value = "Tronçonneuse";
                            break;
                        }
                    }
                else{
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "Tronçonneuse") {
                            MachineArray[i].value = "/";
                            break;
                        }
                    }
                }
                break;
        case 5:
                if(checkBoxarray[8].checked == true)
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "/") {
                            MachineArray[i].value = "Kärcher";
                            break;
                        }
                    }
                else{
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "Kärcher") {
                            MachineArray[i].value = "/";
                            break;
                        }
                    }
                    if(timeTxtArray[8].value != " ") {
                        timeTxtArray[8].value = " ";
                    }
                }
                break;
    }
}

function calculatePrice(number){
    switch  (number) {
        case 1:
            alert(quantityArray[0].value)
        
        /*if(MachineArray[0].value !="/" && quantityArray[0].value != " "|| quantityArray[0].value != 0 ){
                priceArray[0].value = 2*10;

            }*/
            break;
        case 2:
            break;
        case 3: 
            break;
        case 4:
            break;


    }

}