$(function () {
    $("#username").text(usernameText);
    showMonthReport();
    showWeekReport();
})
var usernameText =sessionStorage.getItem("username");
async function showMonthReport() {
    var reports,jsonReports;

    reports = await fetch("empdata.json");
    jsonReports = await reports.json();
    var obj= jsonReports.find((report)=> report.username === usernameText);
    var date = new Date().getDate();
    if (date === 30){
    $("#attendanceCount").text(obj.attendanceNo);
    $("#lateCount").text(obj.lateNo);
    $("#abscenceCount").text(obj.abscenceNo);
    }else{
        $("#month").css("display","none");
        $("#daythirty").css("display","block");
    }
    
}
async function showWeekReport() {
    var reports,jsonReports;
    var time = sessionStorage.getItem("attendanceTime");
    reports = await fetch("empdata.json");
    jsonReports = await reports.json();
    var obj= jsonReports.find((report)=> report.username === usernameText);
    $("#attendentTime").text(time);
}