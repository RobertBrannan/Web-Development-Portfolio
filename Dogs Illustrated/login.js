function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "demo11" && password == "bigchihuahua"){
        alert ("Login Successful!");
        return false;
    }

    else{
        alert("Invalid username or password.");
        return false;
    }
}