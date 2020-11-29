function main() { // I know this isn't proper JS but it helps me
    // Seeing if there are teams saved
    if (localStorage.getItem("teams") !== null) {
        // Getting
        var teams = JSON.parse(localStorage.getItem("teams"));
        var teamDiv = document.getElementById("teams");
        // Adding elements
        for (var i = 0; i < teams.length; i++) {
            var team = teams[i];
            teamDiv.innerHTML += `<div class="team"><h1 class="teamName">${team["name"]}</h1><p class="animalType">${team["animals"][0]["type"]}</p><p class="animalWeapon">${team["animals"][0]["weapon"]}</p><p class="animalType">${team["animals"][1]["type"]}</p><p class="animalWeapon">${team["animals"][1]["weapon"]}</p><p class="animalType">${team["animals"][2]["type"]}</p><p class="animalWeapon">${team["animals"][2]["weapon"]}</p></div>`;
        }
        }
}

function newTeam() {
    window.location = "newTeam/index.html";
}
