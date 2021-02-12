var theVotedList = [];


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
    

    fetch(`https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes`)
    .then(response => response.json())
    .then(function(data) {
        
        data.voting.forEach(element => {
            theVotedList.push(element.voter)
        })

        
        
    })
    
   

     console.log(theVotedList);
     
   
    logInForm.addEventListener("submit", function(event) {
        
        
        user = userLogIn.value;
        localStorage.setItem("user", user)
            if(userList.includes(user)) {
                
            } else{
                alert("Du skal skrive dit lønnummer")
                
                event.preventDefault()
                
            }  
            localStorage.setItem("voter", user);
            
            
        })
        console.log(theVotedList);
            


})


    