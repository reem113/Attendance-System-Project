$(function () {
    $("#usernametext").text(usernameText);
    $("#attendConfirmation").on('click', () => {
        getUserName();
        sendData();
    })
    
})
var usernameText = sessionStorage.getItem("username");
async function getUserName() {
    
    var time = new Date().getHours() + ":" + new Date().getMinutes();
    sessionStorage.setItem("attendanceTime",`${time}`);
    var users = await fetch("empdata.json");
    var jsonUsers = await users.json();
    var obj = jsonUsers.find((user) => user.username === usernameText);
    $("#username").text(obj.name);
    sessionStorage.setItem("Name",`${$("#username").text()}`);
    $("#attendentTime").text(time);
    
}


async function sendData(){
    var empAttendanceTime = sessionStorage.getItem("attendanceTime");


    var xhr = await new XMLHttpRequest();
    xhr.open("get",'empdata.json');
    xhr.onload = function(){

      jsonContent = JSON.parse(xhr.responseText);
      console.log(jsonContent);

      var obj = jsonContent.find((user) => user.username === usernameText);
      console.log(obj);
      var objIndex = jsonContent.indexOf(obj);
      console.log(objIndex);

      var name = obj.name;
      var username = obj.username
      var address = obj.address;
      var email = obj.email;
      var age = obj.age;
      var password = obj.password;
      var flag = obj.flag;
      var attendNo = obj.attendanceNo;
      var lateNo = obj.lateNo;
      
      var updatedArray = jsonContent.splice(objIndex,1);
      var hr_min =empAttendanceTime.split(":");
      console.log(hr_min[0]);
      if(hr_min[0] === 9 || hr_min[0]<= 10 ){
          attendNo++;
      }else if(hr_min[0] >9 || hr_min[0]<= 12 ){
          attendNo++;
          lateNo++;
      }var absNo = obj.abscenceNo;
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
      })
      writeToJson(jsonContent);
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

