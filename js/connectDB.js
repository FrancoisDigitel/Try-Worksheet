var mysql = require('mysql');
var number = 0;
var con = mysql.createConnection({
    host: "form.lpif.lu",
    user: "CIGL-USER",
    password: "0f$374lXq",
    database: "CIGL-DB"
});

con.connect(function(err) {
    var temp = " "; 
   
    if (err) throw err;
  //Update the address field:
    con.query("Select serialNumber FROM info", function (err, result, fields) {
        if (err) throw err;
        temp = JSON.stringify(result);
        var temp2 = temp.split(":");
        temp2.forEach(function(index,value){
            if(!isNaN(parseInt(index))){
                number = parseInt(index);
                console.log(number)
                number += 1
                var sql = "UPDATE info SET serialNumber =('"+number+"')";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                });
            }

        })
    })
        console.log(number)
    
    
});
