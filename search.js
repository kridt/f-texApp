fetch("https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/coworkers")
.then(response => response.json())
.then(function(data) {

    var form = document.querySelector(".voteForm")
    var coworkerList = document.querySelector(".coworkerList");
    var coworkersName = [];
     
    
    data.results.forEach(element => {
        coworkersName.push(element.name)
    }); 
    
    form.addEventListener("submit", function(e){
        e.preventDefault();

        var searchFor = document.querySelector(".searchFor");
    
        var coworkerArrAll = data.results;
    
        /* var coworkerArr = coworkersName.includes(`${searchFor}`);  */
        
        /* var searchNames = coworkersName.filter(x => x ===) */


       /*  var name = data.results.filter(x => x.sallingID === user).map(x => x.name)  */


       console.log(coworkersName);

    })



})