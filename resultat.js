var liste = document.querySelector(".leaderboard");


fetch(`http://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes`)
.then(response => response.json())
.then(function(data) {


    data.voting.forEach(result => {
        const li = document.createElement("li");
        li.innerHTML=`
        <p>${result.vote} med</p>
        `;
        liste.appendChild(li)
         console.log(result);
    });
})