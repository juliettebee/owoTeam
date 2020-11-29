// This file hosts functions used by multiple scripts
// Simple functioon that returns team, returns nothing there's no teams
function getTeam(i) {
    if (localStorage.getItem("teams") !== null) {
        var teams = JSON.parse(localStorage.getItem("teams"));
        console.log(teams);
        return teams[i];
    } 
}
