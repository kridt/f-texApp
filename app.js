var userLogIn = document.getElementById("user");
var user = "";
var logInForm = document.querySelector(".logInForm");


logInForm.addEventListener("submit", function(event) {
    user = userLogIn.value;
    
    localStorage.setItem("voter", user);

})