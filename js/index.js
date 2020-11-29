function main() { // I know this isn't proper JS but it helps me
    // Seeing if there are teams saved
    if (localStorage.getItem("teams") !== null) {
        // Getting
        var teams = JSON.parse(localStorage.getItem("teams"));
        var teamDiv = document.getElementById("teams");
        // Adding elements
        for (var i = 0; i < teams.length; i++) {
            // Getting the team
            var team = teams[i];
            // Creating the element
            teamDiv.innerHTML += `
            <div class="team">
                <h1 class="teamName">
                    ${team["name"]}
                    <i class="fas fa-check" aria-label="Check mark, use icon" onclick="generateCommand(${i})"></i>
                    <i class="far fa-trash-alt aria-label="Trash icon" onclick="deleteTeam(${i})"></i>
                    <i class="fas fa-code-branch" aria-label="Code branch icon" onclick="branch(${i})"></i>
                </h1>
                <div class="animal">
                    <p class="animalType">${team["animals"][0]["type"]}<span class="animalWeapon"> - ${team["animals"][0]["weapon"]}</span></p>
                </div>
                <div class="animal">
                    <p class="animalType">${team["animals"][1]["type"]}<span class="animalWeapon"> - ${team["animals"][1]["weapon"]}</p>
                </div>
                <div class="animal">
                    <p class="animalType">${team["animals"][2]["type"]}<span class="animalWeapon"> - ${team["animals"][1]["weapon"]}</p>
                </div>
            </div>`;
        }
    }
}

function newTeam() {
    window.location = "newTeam/index.html";
}

function generateCommand(i) {
    window.location = `generateCommand/index.html?i=${i}`;
}


