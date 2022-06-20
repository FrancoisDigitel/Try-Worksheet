// imports
import  {getSerialNumber} from'./connectDB.js';



function getSerialNumberFromScript(){
    var number = getSerialNumber();
    var element = document.getElementById('fName')
    alert("hello")
    element.value = number;
}
