 var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;

function validate(){

    if(userName=="admin" && password=="user"){
            alert("login successfully")
             return false;
    }
    else{
        alert("login failed")
    }

}

