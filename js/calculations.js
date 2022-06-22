
// these belong to the table under the "Travaux Effectues" title
let checkboxes = document.getElementsByClassName("work");
let timeTextboxes = document.getElementsByClassName("time");

//prices
let priceTextboxes = document.getElementsByClassName("Price");

//machine
let machineTimeTextBoxes = document.getElementsByClassName("MachineTime");
let MachineTxtBoxes = document.getElementsByClassName("Machine");
let quantityTextboxes = document.getElementsByClassName("Quantity");

//workers
let workerNameBoxes = document.getElementsByClassName("WorkerName");
let workerTimeBoxes = document.getElementsByClassName("WorkerTime");

//product
let productBoxes = document.getElementsByClassName("Product");
let productQuantityBoxes = document.getElementsByClassName("QuantityProduct");


// Arrays
var checkBoxarray =[];
var timeTxtArray = [];
var MachineArray = [];
var quantityArray = [];
var priceArray = [];
var machineTimeArray = [];
var workerNameArray = [];
var workerTimeArray = [];
var productArray = [];
var productQuantityArray = [];

// Time variable
var totalMins = 0;
var totalHours = 0;
var Mins = 0;

// Tarif
var workerPerHour = 16; 
var machinePerHour = 5;


// functions / Funktionen

// this function gets used to initialize all the needed arrays while the page is getting loaded
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
    for(var i = 0; i < machineTimeTextBoxes.length; i++) {
        machineTimeArray.push(machineTimeTextBoxes[i])
    }
    for(var i = 0; i < workerNameBoxes.length; i++) {
        workerNameArray.push(workerNameBoxes[i])
    }
    for(var i = 0; i < workerTimeBoxes.length; i++) {
        workerTimeArray.push(workerTimeBoxes[i])
    }
    for(var i = 0; i < productBoxes.length; i++) {
        productArray.push(productBoxes[i])
    }
    for(var i = 0; i < productQuantityBoxes.length; i++) {
        productQuantityArray.push(productQuantityBoxes[i])
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
        Mins = parseInt(totalMins)
    }

    else if (totalMins == 0) {
        document.getElementById("TTime").value = parseInt(totalHours) + ":" + "00";
    }

    else {
        document.getElementById("TTime").value = parseInt(totalHours) + ":" + parseInt(totalMins);
        Mins = parseInt(totalMins)
    }
    totalMins = 0;
    totalHours = 0;
}


function addMachine(number){
var foundEqualMachine = false;
    switch (number) {
        case 1:
            if(checkBoxarray[0].checked == true){
            for (var i = 0; i < 4; i++) {
                if(MachineArray[i].value == "Tondeuse"){
                    foundEqualMachine = true;
                    break;
                }
            }
            if(!foundEqualMachine){
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "/") {
                        MachineArray[i].value = "Tondeuse";
                        break;
                    }
                }
            }
            }
            else{
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "Tondeuse") {
                            MachineArray[i].value = "/";       
                        break; 
                        }
                    }
                    if(timeTxtArray[0].value != "") {
                        timeTxtArray[0].value = "";
                    }
                }
            break;

        case 2:
            if(checkBoxarray[1].checked == true){
            for (var i = 0; i < 4; i++) {
                if(MachineArray[i].value == "Débrouss"){
                    break;
                }
            }
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "/") {
                        MachineArray[i].value = "Débrouss";
                        break;
                    }
                }
            }
            else{
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "Débrouss") {
                        MachineArray[i].value = "/";
                        break;
                    }
                }
                if(timeTxtArray[1].value != "") {
                    timeTxtArray[1].value = "";
                }
            }
            break;
        case 3:
            if(checkBoxarray[3].checked == true){
            for (var i = 0; i < 4; i++) {
                if(MachineArray[i].value == "Taille-Haie"){
                    break;
                }
            }
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "/") {
                        MachineArray[i].value = "Taille-Haie";
                        break;
                    }
                }
            }
            else{
                for (var i = 0; i < 4; i++) {
                    if (MachineArray[i].value == "Taille-Haie") {
                        MachineArray[i].value = "/";
                        break;
                    }
                }
                if(timeTxtArray[3].value != "") {
                    timeTxtArray[3].value = "";
                }
            }
            break;
        case 4:
                if(checkBoxarray[4].checked == true){
                for (var i = 0; i < 4; i++) {
                    if(MachineArray[i].value == "Tronçonneuse"){
                        break;
                    }
                }
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "/") {
                            MachineArray[i].value = "Tronçonneuse";
                            break;
                        }
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
                if(checkBoxarray[8].checked == true){
                for (var i = 0; i < 4; i++) {
                    if(MachineArray[i].value == "Kärcher"){
                        break;
                    }
                }
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "/") {
                            MachineArray[i].value = "Kärcher";
                            break;
                        }
                    }
                }
                else{
                    for (var i = 0; i < 4; i++) {
                        if (MachineArray[i].value == "Kärcher") {
                            MachineArray[i].value = "/";
                            break;
                        }
                    }
                    if(timeTxtArray[8].value != "") {
                        timeTxtArray[8].value = "";
                    }
                }
                break;
    }
}

function calculateMachinePrice(number){
    switch  (number) {
        case 1:
        // we first check if every field is filled with a value, if not we do not print anything into the price box
        if((MachineArray[0].value !="/" && quantityArray[0].value != "" && timeTxtArray[0] != "")
            ||( MachineArray[0].value !="/" && quantityArray[0].value != 0  && timeTxtArray[0] != 0)){
                    var time = machineTimeArray[0].value;
                    var percentage = time / 60;
                    var price = machinePerHour * percentage * quantityArray[0].value;
                    price = Number(price.toFixed(2)) //  EN: limit to 2 digits  behind komma // DE: Limitiert auf 2 Stellen hinter dem Komma
                    if(price < 10 ){
                            priceArray[0].value = "0"+ price + "€"
                    }
                    else{
                            priceArray[0].value = price + "€"
                    }
            }
            else{
                    priceArray[0].value = "";
            }
            break;
        case 2:
            if((MachineArray[1].value !="/" && quantityArray[1].value != "" && timeTxtArray[1] != "")
            ||( MachineArray[1].value !="/" && quantityArray[1].value != 0  && timeTxtArray[1] != 0)){
                    var time = machineTimeArray[0].value;
                    var percentage = time / 60;
                    var price = machinePerHour * percentage * quantityArray[0].value;
                    price = Number(price.toFixed(2))
                    if(price < 10 ){
                        priceArray[1].value = "0"+ price + "€"
                    }
                    else{
                        priceArray[1].value = price + "€"
                    }
                }
            else{
                    priceArray[1].value = "";
            }
            break;
        case 3: 
            if((MachineArray[2].value !="/" && quantityArray[2].value != "" && timeTxtArray[2] != "")
            ||( MachineArray[2].value !="/" && quantityArray[2].value != 0  && timeTxtArray[2] != 0)){
                    var time = machineTimeArray[0].value;
                    var percentage = time / 60;
                    var price = machinePerHour * percentage * quantityArray[0].value;
                    price = Number(price.toFixed(2))
                    if(price < 10 ){
                            priceArray[2].value = "0"+ price + "€"
                    }
                    else{
                            priceArray[2].value = price + "€"
                    }
            }
            else{
                    priceArray[2].value = "";
            }
            break;
        case 4:
            if((MachineArray[3].value !="/" && quantityArray[3].value != "" && timeTxtArray[3] != "")
            ||( MachineArray[3].value !="/" && quantityArray[3].value != 0  && timeTxtArray[3] != 0)){
                    var time = machineTimeArray[0].value;
                    var percentage = time / 60;
                    var price = machinePerHour * percentage * quantityArray[0].value;
                    price = Number(price.toFixed(2))
                    if(price < 10 ){
                            priceArray[3].value = "0"+ price + "€"
                    }
                    else{
                            priceArray[3].value = price + "€"
                    }
            }
            else{
                    priceArray[3].value = "";
            }
            break;
    }

}
function calculateWorkerPrice(number){
    switch (number) {
      case 1:
          if(workerNameArray[0].value != ""){
            workerTimeArray[0].value = document.getElementById("TTime").value;
            var hours = parseInt(document.getElementById("TTime").value);
            var minutesPercentage = Mins / 60;
            var result = hours * workerPerHour +(workerPerHour * minutesPercentage);
            priceArray[4].value = Number(result.toFixed(2));
        }
        else{
            priceArray[4].value = "";
            workerTimeArray[0].value = "";
        }
        break; 
      case 2:
        if(workerNameArray[1].value != ""){
            workerTimeArray[1].value = document.getElementById("TTime").value;
            var hours = parseInt(document.getElementById("TTime").value);
            var minutesPercentage = Mins / 60;
            var result = hours * workerPerHour +(workerPerHour * minutesPercentage);
            priceArray[5].value = Number(result.toFixed(2));
        }
        else{
            priceArray[5].value = "";
            workerTimeArray[1].value = "";
        }
          break;
      case 3:
        if(workerNameArray[2].value != ""){
            workerTimeArray[2].value = document.getElementById("TTime").value;
            var hours = parseInt(document.getElementById("TTime").value);
            var minutesPercentage = Mins / 60;
            var result = hours * workerPerHour +(workerPerHour * minutesPercentage);
            priceArray[6].value = Number(result.toFixed(2));
        }
        else{
            priceArray[6].value = "";
            workerTimeArray[2].value = "";
        }
          break;
      case 4:
        if(workerNameArray[3].value != ""){
            workerTimeArray[3].value = document.getElementById("TTime").value;
            var hours = parseInt(document.getElementById("TTime").value);
            var minutesPercentage = Mins / 60;
            var result = hours * workerPerHour +(workerPerHour * minutesPercentage);
            priceArray[7].value = Number(result.toFixed(2));
        }
        else{
            priceArray[7].value = "";
            workerTimeArray[3].value = "";
        }
          break;
      case 5: 
        if(workerNameArray[4].value != ""){
        workerTimeArray[4].value = document.getElementById("TTime").value;
        var hours = parseInt(document.getElementById("TTime").value);
        var minutesPercentage = Mins / 60;
        var result = hours * workerPerHour +(workerPerHour * minutesPercentage);
        priceArray[8].value = Number(result.toFixed(2));
        }
        else{
            priceArray[8].value = "";
            workerTimeArray[4].value = "";
        }
        break;
    }
}

function calculateProduct(number){
    if(productArray[number].checked == true){
        switch (number){
            case 0:
                priceArray[9].value = productQuantityArray[number].value * 0.50;
                break;
            case 1: 
                priceArray[10].value = productQuantityArray[number].value * 0.50;
                break
            case 2:
                priceArray[11].value = productQuantityArray[number].value * 0.50;
                break;
        }
    }
        else{
            switch (number){
                case 0:
                    priceArray[9].value = "";
                    break;
                case 1: 
                    priceArray[10].value = "";
                    break
                case 2:
                    priceArray[11].value = "";
                    break;
            }
        }
}

function calculateTotalPrice(){
    var price = 0;
    for(var i = 0; i < priceTextboxes.length; i++){
        price += priceArray[i].value;
    }
    document.getElementById("totalPrice").value = Number(parseFloat(price.toFixed(2)));
}

function checkCheckbox(number){
    alert(timeTxtArray[1].value)
    for(var i = 0; i < timeTextboxes.length; i++){
       if(timeTextboxes[i].value != ""){
            checkBoxarray[i].checked = true;
            addMachine(number)
       }
        }
    }