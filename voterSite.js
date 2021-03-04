var user = localStorage.getItem("voter");
var displayName = document.getElementById("name");
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
  }
  
/* console.log(user); */

fetch("https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/coworkers")
	.then(response => response.json())
	.then(function(data) {
		setTimeout(function() {
			var name = data.results.filter(x => x.sallingID === user).map(x => x.name)
			var full_name_spit = name[0].split(" ")
			var first_name = full_name_spit[0]

			if (user === "127027") {
				displayName.innerHTML = `<h1 class="tina">YELLOW ${first_name}!</h1> `;

			} else {

				if (user === "299371") {
					displayName.innerText = `Hej til den bedste postmedarbejder ${first_name}`
				} else {

					if (user === "276712") {
						displayName.innerText = `Vær hilset lord Lord Kirchmann `
					} else {
						if (user === "164745") {
							displayName.innerText = `Hey Tina v2`;

						} else {
								if (user === "305094"){
									displayName === `Hej Bachi`
								}else{
									
									if(user === "177538"){
										displayName.innerText = `omfg dig igen Tinas lillebror`
									}else{

										displayName.innerText = `Hej ${first_name}`;
									}
								}

						} 

					}

				}

			}

		}, 200);


		var dataList = document.getElementById("vote-datalist")
		var allCoworkers = data.results;
		
		var voterble = allCoworkers.filter(coworker => coworker.leder === undefined)


		
		
		shuffle(voterble) 
		voterble.forEach(element => {
			const coworkerList = document.createElement("option");
			coworkerList.classList.add("options");

			coworkerList.innerText = `
            ${element.name}
            `
			dataList.appendChild(coworkerList)
		});

		document.getElementById("vote").addEventListener("change", function(e) {
			var voteInput = e.target.value;
			localStorage.setItem("vote", voteInput)
		})

		var voteLocalStorage = localStorage.getItem("vote")
		console.log(localStorage.getItem("vote"));

		

		function goHome() {
			window.location.href = "/";
		}

		var voterData = document.getElementById("voter");

		voterData.value = user + " " + name;
		fetch(`https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes`)
			.then(response => response.json())
			.then(function(data) {
				var voteForm = document.querySelector(".voteForm");

			

				/* console.log(voted, user); */
				voteForm.addEventListener(`submit`, function(e) {
					e.preventDefault();
					
					var voteValue = document.getElementById("vote");

					console.log(voteValue.value);

					 if (voteValue.value === "") {
						alert("Du skal vælge en medarbejder");
						e.preventDefault();
					} else {

						if (voteForm.message.value === ""){
							alert("Du skal skrive en begrundelse");
							e.preventDefault();
						} else{

							
							var voter = user;
							var message = voteForm.message.value;
							
							var body = new FormData(voteForm);
							body.vote = vote;
							body.voter = voter;
							body.message = message;
							
							fetch(`https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/votes`, {
								method: `POST`,
								body
							}).then(response => {
								console.log("post", response);
								if (!response.ok) {
									alert("Noget gik galt")
									return;
								}
								window.location.href = "/f-texApp/tak.html";
								
							})
						}
					}
					
				});
			})
			
		})