
function exportPDF(){

    var title = document.getElementById("title").value;
    var lFName = document.getElementById("lFName").innerText;
    var fName = document.getElementById("fName").value;
    var lLname = document.getElementById("lLName").innerText;
    var lName = document.getElementById("lName").value;
    var lAddress = document.getElementById("lAddress").innerText;
    var address = document.getElementById("address").value;
    var lLocation = document.getElementById("lLocation").innerText;  
    var Location = document.getElementById("location").value;
    

    var element = document.getElementById("data");
    html2pdf(element);
    /*var doc = new jsPDF();
    
    doc.setFontSize(16);
    doc.text(lFName + "  " + fName + "<br>" ,10 ,20);
    doc.text(lLname + "  " + lName + "<br>" ,10 ,20);
    doc.text(lAddress + "  " + address + "<br>",10 ,20);
    doc.text(lLocation + "  " + Location + "<br>" ,10 ,20);
    doc.fromHTML(document.getElementById("data"), 
    15,
    15, 
    {'width': 170},
    function() 
     {
      doc.save("PDF_Documet.pdf");
    });
  */
   
}