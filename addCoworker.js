var createForm = document.getElementById("createCoworkerForm");

createForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newCoworker = {
        name: `test testsen`,
        sallingID: "123456",
        department: "food"
    }

    

    fetch("https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/coworkers", {
        method: "POST",
        headers: {
            contentType: "application/json",

        },
        form: newCoworker
    })
    .then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
    
})