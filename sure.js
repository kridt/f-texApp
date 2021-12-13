const consent = document.getElementById("deleteAllCoworkers");

fetch("https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes")
.then(response => response.json())
.then((data) => {
    
    data.voting.forEach((vote) => {
        console.log(vote._id);

        consent.addEventListener("click", function(e) {
            e.preventDefault()
            fetch(`https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes/${vote._id}`, {
                method:"delete"
            })
            .then(response => {
                window.location.href = "/"
            })
            
        })
        
        
    })
    
})

