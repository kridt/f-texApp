

fetch("https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/coworkers")
.then(response => response.json())
.then(function(data) {
    var userLogIn = document.getElementById("user");
    var user = "";
    var logInForm = document.querySelector(".logInForm");
    

    var userList = [];
    
    data.results.forEach(element => {
        
        userList.push(element.sallingID)
    });
    
    console.log(userList);
    
    logInForm.addEventListener("submit", function(event) {
        console.log(user);
        user = userLogIn.value;
            if(userList.includes(user)) {
                
            } else{
                alert("Du skal skrive dit lønnummer")
                
                event.preventDefault()
                
            }
            localStorage.setItem("voter", user);
            
            
            })


})


    