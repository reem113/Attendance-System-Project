"use strict"

$(function () {
    
    $("#submit").on('click', () => {
        getDataFromForm(); 
        console.log(name,address,email,age,username,password,flag);
        sendEmail();
        
    })
    

     
      });
      var name, address, email, age, username, password, flag, jsonContent=[];


      function generatePassword() {
        let password = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$&";
        for (let i = 0; i < 8; i++) {
          password += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return password;
      };

      async function sendData(){
        console.log("hello");
        var xhr = await new XMLHttpRequest();
        xhr.open("get",'empdata.json');
        xhr.onload = function(){
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
          })
          console.log(jsonContent);
          var stringifiedJson = JSON.stringify(jsonContent);
          console.log(stringifiedJson);
          writeToJson(jsonContent);
          console.log("heeeeh");
        }
          xhr.send();
      }

      function writeToJson(arrayofObjects){
        let blob = new Blob([JSON.stringify(arrayofObjects)],{type:"application/json"});
        let link = document.createElement("a");
        link.href = window.webkitURL.createObjectURL(blob);
        link.setAttribute("download","empdata.json");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      }

      function getDataFromForm(){
         name = ($("#fname").val()) + " " + ($("#lname").val());
         address = $("#address").val();
         email = $("#email").val();
         age = $("#age").val();
         username = `${name.slice(0,3) + Math.ceil(Math.random() * 100) + "iti"}`;
         password = generatePassword();
        $(":checked").val() === "Employee" ?  flag=0 : flag=1;
        sendData();
      }
  
      function sendEmail() {
          Email.send({
          Host: "smtp.elasticemail.com",
          Username:"attendancesys05@gmail.com",
          Password: "644D106F7B563892F123D89BD4A4410B7F53",
          To: email,
          From: "attendancesys05@gmail.com",
          Subject: "Verification Email",
          Body: `Welcome To Attendance System 
          Your 
          Username:"${username}"
          Password:${password}`,
        })
          .then(function (message) {
            alert(message);
            
          }); 
      }
      



