var theVotedList = [];

fetch("https://foetex-osterbro-medarbejdere.herokuapp.com/api/v1/coworkers")
	.then(response => response.json())
	.then(function(data) {
		console.log(data);
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
					var voter = element.voter;
					theVotedList.push(voter)
				})

			})

		logInForm.addEventListener("submit", function(event) {

			user = userLogIn.value;
			var voted = theVotedList.includes(user + " ");

			if (userList.includes(user)) {
				if (voted === true) {
					event.preventDefault();
					alert("Du kan kun stemme 1 gang")
				}

			} else {
				alert("Du skal skrive dit lønnummer")

				event.preventDefault()

			}
			localStorage.setItem("voter", user);

			console.log(voted);
		})

	})