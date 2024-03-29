var liste = document.querySelector(".leaderboard");
let url = new URLSearchParams(window.location.search);
const voteCount = document.getElementById("voteCount");

fetch(`https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes`)
	.then(response => response.json())
	.then(function(data) {

		voteCount.innerText = data.count
		console.log(data);

		data.voting.forEach(result => {
			const li = document.createElement("li");
			li.innerHTML = `
        <h2>${result.vote} </h2>
        <p>${result.message} - <span>${result.voter}</span></p>
        `;
			liste.appendChild(li)
		});
	})