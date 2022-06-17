
function exportPDF(){
    var element = document.getElementById("data");
    var pdf = new html2pdf(element,'A1','portrait' ,'fr',true,'UTF-8');
    html2pdf(pdf);
}