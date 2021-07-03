"use strict";

$(function () {
  $("#username").text(usernameText);
  showMonthReport();
  showWeekReport();
});
var usernameText = sessionStorage.getItem("username");

function showMonthReport() {
  var reports, jsonReports, obj, date;
  return regeneratorRuntime.async(function showMonthReport$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("empdata.json"));

        case 2:
          reports = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(reports.json());

        case 5:
          jsonReports = _context.sent;
          obj = jsonReports.find(function (report) {
            return report.username === usernameText;
          });
          date = new Date().getDate();

          if (date === 30) {
            $("#attendanceCount").text(obj.attendanceNo);
            $("#lateCount").text(obj.lateNo);
            $("#abscenceCount").text(obj.abscenceNo);
          } else {
            $("#month").css("display", "none");
            $("#daythirty").css("display", "block");
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showWeekReport() {
  var reports, jsonReports, time, obj;
  return regeneratorRuntime.async(function showWeekReport$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          time = sessionStorage.getItem("attendanceTime");
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("empdata.json"));

        case 3:
          reports = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(reports.json());

        case 6:
          jsonReports = _context2.sent;
          obj = jsonReports.find(function (report) {
            return report.username === usernameText;
          });
          $("#attendentTime").text(time);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}