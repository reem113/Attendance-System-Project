$(function () {
    showall();
    showlate();
    showabscent();
    showattendant();
    $("#allreports").on('click', () => {
            $('#lateTable').css('display','none');
            $('#abscenceTable').css('display','none');
            $('#attendanceTable').css('display','none');
            $('#allTable').css('display','block');
    })
    $("#latereports").on('click',() => {
            $('#allTable').css('display','none');
            $('#abscenceTable').css('display','none');
            $('#attendanceTable').css('display','none');
            $('#lateTable').css('display','block');
    })
    $("#abscencereports").on('click',() => {
            $('#lateTable').css('display','none');
            $('#allTable').css('display','none');
            $('#attendanceTable').css('display','none');
            $('#abscenceTable').css('display','block');
    })
    $("#attendancereports").on('click',() => {
            $('#lateTable').css('display','none');
            $('#allTable').css('display','none');
            $('#abscenceTable').css('display','none');
            $('#attendanceTable').css('display','block');
    })
})
var jsonReports;
async function getDataFromJSon() {
    var reports;
    reports = await fetch("empdata.json");
    jsonReports = await reports.json();
}
async function showall(){
    await getDataFromJSon();
    $('#allTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Attendance' + '</th><th>' + 'Abscence' + '</th><th>' + 'Late</th></tr>'))
    for (var i = 0; i < jsonReports.length; i++) {
        
        var row = $('<tr><td>' + jsonReports[i].name +
         '</td><td>' + jsonReports[i].attendanceNo + 
         '</td><td>' + jsonReports[i].abscenceNo + 
         '</td><td>' + jsonReports[i].lateNo + '</td></tr>');
        
        $('#allTable').append(row);}
}
async function showlate(){
    await getDataFromJSon();
        $('#lateTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Late</th></tr>'))
        for (var i = 0; i < jsonReports.length; i++) {
            var row = $('<tr><td>' + jsonReports[i].name +
             '</td><td>' + jsonReports[i].lateNo + '</td></tr>');
            $('#lateTable').append(row);}
}
async function showabscent(){
    await getDataFromJSon();
        $('#abscenceTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Abscence</th></tr>'))
        for (var i = 0; i < jsonReports.length; i++) {
            var row = $('<tr><td>' + jsonReports[i].name +
             '</td><td>' + jsonReports[i].abscenceNo +  '</td></tr>');
            $('#abscenceTable').append(row);}
}
async function showattendant(){
    await getDataFromJSon();
    $('#attendanceTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Attendance' +  '</th></tr>'))
    for (var i = 0; i < jsonReports.length; i++) {
        
        var row = $('<tr><td>' + jsonReports[i].name +
         '</td><td>' + jsonReports[i].attendanceNo +  '</td></tr>');
        $('#attendanceTable').append(row);}
    
}