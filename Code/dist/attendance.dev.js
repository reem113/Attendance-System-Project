"use strict";

$(function () {
  $("#usernametext").text(usernameText);
  $("#attendConfirmation").on('click', function () {
    getUserName();
    sendData();
  });
});
var usernameText = sessionStorage.getItem("username");

function getUserName() {
  var time, users, jsonUsers, obj;
  return regeneratorRuntime.async(function getUserName$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          time = new Date().getHours() + ":" + new Date().getMinutes();
          sessionStorage.setItem("attendanceTime", "".concat(time));
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("empdata.json"));

        case 4:
          users = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(users.json());

        case 7:
          jsonUsers = _context.sent;
          obj = jsonUsers.find(function (user) {
            return user.username === usernameText;
          });
          $("#username").text(obj.name);
          sessionStorage.setItem("Name", "".concat($("#username").text()));
          $("#attendentTime").text(time);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

function sendData() {
  var empAttendanceTime, xhr;
  return regeneratorRuntime.async(function sendData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          empAttendanceTime = sessionStorage.getItem("attendanceTime");
          _context2.next = 3;
          return regeneratorRuntime.awrap(new XMLHttpRequest());

        case 3:
          xhr = _context2.sent;
          xhr.open("get", 'empdata.json');

          xhr.onload = function () {
            jsonContent = JSON.parse(xhr.responseText);
            console.log(jsonContent);
            var obj = jsonContent.find(function (user) {
              return user.username === usernameText;
            });
            console.log(obj);
            var objIndex = jsonContent.indexOf(obj);
            console.log(objIndex);
            var name = obj.name;
            var username = obj.username;
            var address = obj.address;
            var email = obj.email;
            var age = obj.age;
            var password = obj.password;
            var flag = obj.flag;
            var attendNo = obj.attendanceNo;
            var lateNo = obj.lateNo;
            var updatedArray = jsonContent.splice(objIndex, 1);
            var hr_min = empAttendanceTime.split(":");
            console.log(hr_min[0]);

            if (hr_min[0] === 9 || hr_min[0] <= 10) {
              attendNo++;
            } else if (hr_min[0] > 9 || hr_min[0] <= 12) {
              attendNo++;
              lateNo++;
            }

            var absNo = obj.abscenceNo;
            absNo = 22 - attendNo;
            jsonContent.push({
              "name": name,
              "address": address,
              "email": email,
              "age": age,
              "username": username,
              "password": password,
              "flag": flag,
              "attendanceNo": attendNo,
              "abscenceNo": absNo,
              "lateNo": lateNo
            });
            writeToJson(jsonContent);
          };

          xhr.send();

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function writeToJson(arrayofObjects) {
  var blob = new Blob([JSON.stringify(arrayofObjects)], {
    type: "application/json"
  });
  var link = document.createElement("a");
  link.href = window.webkitURL.createObjectURL(blob);
  link.setAttribute("download", "empdata.json");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}