"use strict";

$(function () {
  $("#submit").on('click', function () {
    getDataFromForm();
    console.log(name, address, email, age, username, password, flag);
    sendEmail();
  });
});
var name,
    address,
    email,
    age,
    username,
    password,
    flag,
    jsonContent = [];

function generatePassword() {
  var password = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$&";

  for (var i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

;

function sendData() {
  var xhr;
  return regeneratorRuntime.async(function sendData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("hello");
          _context.next = 3;
          return regeneratorRuntime.awrap(new XMLHttpRequest());

        case 3:
          xhr = _context.sent;
          xhr.open("get", 'empdata.json');

          xhr.onload = function () {
            console.log("hi");
            jsonContent = JSON.parse(xhr.responseText);
            console.log(jsonContent);
            jsonContent.push({
              "name": name,
              "address": address,
              "email": email,
              "age": age,
              "username": username,
              "password": password,
              "flag": flag,
              "attendanceNo": 0,
              "abscenceNo": 0,
              "lateNo": 0
            });
            console.log(jsonContent);
            var stringifiedJson = JSON.stringify(jsonContent);
            console.log(stringifiedJson);
            writeToJson(jsonContent);
            console.log("heeeeh");
          };

          xhr.send();

        case 7:
        case "end":
          return _context.stop();
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

function getDataFromForm() {
  name = $("#fname").val() + " " + $("#lname").val();
  address = $("#address").val();
  email = $("#email").val();
  age = $("#age").val();
  username = "".concat(name.slice(0, 3) + Math.ceil(Math.random() * 100) + "iti");
  password = generatePassword();
  $(":checked").val() === "Employee" ? flag = 0 : flag = 1;
  sendData();
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "attendancesys05@gmail.com",
    Password: "644D106F7B563892F123D89BD4A4410B7F53",
    To: email,
    From: "attendancesys05@gmail.com",
    Subject: "Verification Email",
    Body: "Welcome To Attendance System \n          Your \n          Username:\"".concat(username, "\"\n          Password:").concat(password)
  }).then(function (message) {
    alert(message);
  });
}