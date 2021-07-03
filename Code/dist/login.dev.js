"use strict";

$(function () {
  $("#login").on('click', function () {
    getAllusers();
  });
});

function getAllusers() {
  var users, jsonUsers, usernameText, passwordText, obj;
  return regeneratorRuntime.async(function getAllusers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          usernameText = $(":text").val();
          console.log(usernameText);
          sessionStorage.setItem("username", "".concat(usernameText));
          passwordText = $(":password").val();
          console.log(passwordText);
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch("empdata.json"));

        case 7:
          users = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(users.json());

        case 10:
          jsonUsers = _context.sent;
          obj = jsonUsers.find(function (user) {
            return user.username === usernameText;
          });

          if (obj.password === passwordText) {
            if (obj.flag === 0) {
              window.location.href = 'attendanceConfirm.html';
            } else {
              window.location.href = 'admin.html';
            }
          } else {
            $("#errorlogin").css("display", "block");
          }

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}