function main() {
    // Getting params
    let params = new URLSearchParams(window.location.search);
    // Filling out
    document.getElementById("teamName").value = params.get('teamName');
    document.getElementById("animalZeroType").value = params.get('animalZeroType');
    document.getElementById("animalZeroWeapon").value = params.get('animalZeroWeapon');
    document.getElementById("animalOneType").value = params.get('animalOneType');
    document.getElementById("animalOneWeapon").value = params.get('animalOneWeapon');
    document.getElementById("animalTwoType").value = params.get('animalTwoType');
    document.getElementById("animalTwoWeapon").value = params.get('animalTwoWeapon');
}


function submit() {
    // Getting values
    const teamVal = {name: document.getElementById("teamName").value,animals: [{type: document.getElementById("animalZeroType").value,weapon: document.getElementById("animalZeroWeapon").value},{type: document.getElementById("animalOneType").value,weapon: document.getElementById("animalOneWeapon").value},{type: document.getElementById("animalTwoType").value,weapon: document.getElementById("animalTwoWeapon").value}]};
    console.log(JSON.stringify(teamVal));
    // Seeing if local storage exists
    if (localStorage.getItem("teams") === null) {
        // Creating empty array
        var teams = [];
    } else {
        // Getting localstorage
        var teams = localStorage.getItem("teams");
        teams = JSON.parse(teams);
    }
    // Adding
    teams.push(teamVal);
    console.log(JSON.stringify(teams));
    // Saving
    localStorage.setItem("teams", JSON.stringify(teams));
    // Redirecting
    window.location = "../index.html";
}
