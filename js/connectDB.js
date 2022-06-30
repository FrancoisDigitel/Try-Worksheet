
var mysql= require('mysql');
var number = 0;
var DBYear = 0;
var con = mysql.createConnection({
    host: "form.lpif.lu",
    user: "CIGL-USER",
    password: "0f$374lXq",
    database: "CIGL-DB",
    multipleStatements: true
});
con.connect(function(err) {
    if (err) throw err;
});
getSerialNumber();

// EN: 
// the UpdateDB() function is used to first get the Date written in the database. 
// Afterwards it calls the  updateSerialNumber() function to update the serialNumber.
// pay attention to callback functions. They will only execute at the end of the program no matter where you write those.
// Therefore we call the UpdateSerialNumber() function in the callback function from the UpdateDB() function;

// DE:
// Die Funktion UpdateDB() wird verwendet, um zunächst das in der Datenbank geschriebene Datum zu erhalten. 
// Danach ruft sie die Funktion updateSerialNumber() auf, um die Seriennummer zu aktualisieren.
// Achten Sie auf die Callback-Funktionen. Sie werden erst am Ende des Programms ausgeführt, egal wo Sie diese schreiben.
// Deshalb rufen wir die Funktion UpdateSerialNumber() in der Callback-Funktion von der Funktion UpdateDB() auf;

 function UpdateDB(){
    var tempYear = "";
    con.query("Select currentYear FROM info", (err, result,fields)=> {
        if (err) throw err;
        DBYear = JSON.stringify(result);
        tempYear = DBYear.split(":");
        tempYear.forEach(function(index,value){
            if(!isNaN(parseInt(index))){
                DBYear = parseInt(index);
                UpdateSerialNumber();
            }
        });
    });
};
// EN: 
// Ethis Update method gets used to update the serialNumber accordingly. If we the variable Year is equal to the current one
// then we increase the serialNumber per 1, else we set it to 0;

// DE:
// diese Update-Methode wird verwendet, um die serialNumber entsprechend zu aktualisieren. Wenn die Variable Year gleich dem aktuellen Wert ist
// dann erhöhen wir die serialNumber um 1, ansonsten setzen wir sie auf 0;

function UpdateSerialNumber(){
    var temp = " "; 
    var Year = new Date().getFullYear();
    
  //Select the serialNumber from the info table in the DB
   if(Year == DBYear){
        con.query("Select serialNumber FROM info", function (err, result, fields) {
            if (err) throw err;
            temp = JSON.stringify(result);           // we take the return value from the DB and convert it into a JSON string
            var temp2 = temp.split(":");             // here we split that JSON String starting at the place with the ":". 
            temp2.forEach(function(index,value){
                if(!isNaN(parseInt(index))){
                    number = parseInt(index);
                    number += 1
                    var sql = "UPDATE info SET serialNumber =('"+number+"')";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        console.log(result.affectedRows + " record(s) updated");
                       
                    });
                }

            })
        })
    }
    else{
        var sql = "UPDATE info SET serialNumber =('"+0+"')";
        con.query(sql, function (err, result) {
        if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");  
        });

        console.log(DBYear)
        DBYear = Year;
        var sql = "UPDATE info SET currentYear =('"+DBYear+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
                
            });

    }

}

 function getSerialNumber(){
   getSerialNumberFromDB()
   return number;
}

function getSerialNumberFromDB(){
        var temp = " "; 
      //Select the address field:
        con.query("Select serialNumber FROM info", function (err, result) {
            if (err) throw err;
            temp = JSON.stringify(result);
            var temp2 = temp.split(":");
            temp2.forEach(function(index,value){
                if(!isNaN(parseInt(index))){
                    number = parseInt(index);
                   console.log(number)
                }
            });
        });
    }
