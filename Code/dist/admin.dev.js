"use strict";

$(function () {
  showall();
  showlate();
  showabscent();
  showattendant();
  $("#allreports").on('click', function () {
    $('#lateTable').css('display', 'none');
    $('#abscenceTable').css('display', 'none');
    $('#attendanceTable').css('display', 'none');
    $('#allTable').css('display', 'block');
  });
  $("#latereports").on('click', function () {
    $('#allTable').css('display', 'none');
    $('#abscenceTable').css('display', 'none');
    $('#attendanceTable').css('display', 'none');
    $('#lateTable').css('display', 'block');
  });
  $("#abscencereports").on('click', function () {
    $('#lateTable').css('display', 'none');
    $('#allTable').css('display', 'none');
    $('#attendanceTable').css('display', 'none');
    $('#abscenceTable').css('display', 'block');
  });
  $("#attendancereports").on('click', function () {
    $('#lateTable').css('display', 'none');
    $('#allTable').css('display', 'none');
    $('#abscenceTable').css('display', 'none');
    $('#attendanceTable').css('display', 'block');
  });
});
var jsonReports;

function getDataFromJSon() {
  var reports;
  return regeneratorRuntime.async(function getDataFromJSon$(_context) {
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

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showall() {
  var i, row;
  return regeneratorRuntime.async(function showall$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getDataFromJSon());

        case 2:
          $('#allTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Attendance' + '</th><th>' + 'Abscence' + '</th><th>' + 'Late</th></tr>'));

          for (i = 0; i < jsonReports.length; i++) {
            row = $('<tr><td>' + jsonReports[i].name + '</td><td>' + jsonReports[i].attendanceNo + '</td><td>' + jsonReports[i].abscenceNo + '</td><td>' + jsonReports[i].lateNo + '</td></tr>');
            $('#allTable').append(row);
          }

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function showlate() {
  var i, row;
  return regeneratorRuntime.async(function showlate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getDataFromJSon());

        case 2:
          $('#lateTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Late</th></tr>'));

          for (i = 0; i < jsonReports.length; i++) {
            row = $('<tr><td>' + jsonReports[i].name + '</td><td>' + jsonReports[i].lateNo + '</td></tr>');
            $('#lateTable').append(row);
          }

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function showabscent() {
  var i, row;
  return regeneratorRuntime.async(function showabscent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getDataFromJSon());

        case 2:
          $('#abscenceTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Abscence</th></tr>'));

          for (i = 0; i < jsonReports.length; i++) {
            row = $('<tr><td>' + jsonReports[i].name + '</td><td>' + jsonReports[i].abscenceNo + '</td></tr>');
            $('#abscenceTable').append(row);
          }

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function showattendant() {
  var i, row;
  return regeneratorRuntime.async(function showattendant$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getDataFromJSon());

        case 2:
          $('#attendanceTable').append($('<tr><th>' + 'Name' + '</th><th>' + 'Attendance' + '</th></tr>'));

          for (i = 0; i < jsonReports.length; i++) {
            row = $('<tr><td>' + jsonReports[i].name + '</td><td>' + jsonReports[i].attendanceNo + '</td></tr>');
            $('#attendanceTable').append(row);
          }

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
}