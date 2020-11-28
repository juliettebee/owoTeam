function main() { // I know this isn't proper JS but it helps me
    // Seeing if there are teams saved
    if (localStorage.getItem("teams") !== null) {
        // Getting
        var teams = JSON.parse(localStorage.getItem("teams"));
        // Adding elements
        for (var i = 0; i < teams.length; i++) {
            var team = teams[i];
            console.log(team["name"]);
        }
    }
}

function newTeam() {
    window.location = "newTeam/index.html";
}
