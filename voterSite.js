var user = localStorage.getItem("voter");
var displayName = document.getElementById("name");
/* console.log(user); */

fetch("https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/coworkers")
.then(response => response.json())
.then(function(data) {
    setTimeout(function(){ 
        var name = data.results.filter(x => x.sallingID === user).map(x => x.name) 
        var full_name_spit = name[0].split(" ")
        var first_name = full_name_spit[0]
        
        if(user === "299371") {
            displayName.innerText= `Hej til den bedste postmedarbejder ${first_name}`
        }else{
            displayName.innerText= `Hej ${first_name}`;

        }

        if(user === "127027"){
            displayName.innerText= `YELLOW ${first_name}!`;
            
        }else{
            
            displayName.innerText= `Hej ${first_name}`;
        }
    }, 200);
        
        var voterData = document.getElementById("voter");

        voterData.value = user + " " + name;

        var selectMedarbejder = document.getElementById("vote")
        data.results.forEach(result => {
           const option = document.createElement("option");
           option.innerText = `
           ${result.name} fra ${result.department}
           `;
            selectMedarbejder.appendChild(option)
        });

        var voteForm = document.querySelector(".voteForm");


        voteForm.addEventListener(`submit`, function(e) {
            e.preventDefault();
            var vote = voteForm.vote.value;
            var voter = user + " " + name;
            var message = voteForm.message.value;


            var body = new FormData(voteForm);
            body.vote = voter;
            body.voter = voter;

            
            
            var theVote = {vote, voter, message};

            /* console.log(theVote); */

            fetch(`https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes`, {
                method: `POST`,
                body
            }).then(response => {
                if(!response.ok){
                    alert("Noget gik galt")
                    return;
                }
                window.location.href="/tak.html"
        });
    } )

        /* voteForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var body = new FormData();
            body.voter = user + " " + name;
            body.vote = voteForm.vote.value;
            console.log(new FormData());
            fetch(`http://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes`, {
                method:"POST",
                body
            }).then(response => {
                if(!response.ok){
                    alert("Noget gik galt")
                    return;
                } 
            })
        })
        
        */
    })