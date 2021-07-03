$(function () {
    $("#login").on('click',()=>{    
        getAllusers();
    })
})
async function getAllusers() {
    var users,jsonUsers,usernameText,passwordText;

    usernameText =  $(":text").val();
    console.log(usernameText);
    sessionStorage.setItem("username",`${usernameText}`);
    passwordText = $(":password").val();
    console.log(passwordText);

    users = await fetch("empdata.json");
    jsonUsers = await users.json();

    var obj= jsonUsers.find((user)=> user.username === usernameText);
    if(obj.password === passwordText){
        if(obj.flag===0){
            window.location.href = 'attendanceConfirm.html'
        }else{
            window.location.href = 'admin.html'
        }
    }else{
        $("#errorlogin").css("display","block");
    }
}