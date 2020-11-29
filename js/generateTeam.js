// Global variable
var step = 0;
var team = null;

function main() {
    // Getting params
    let params = new URLSearchParams(window.location.search);
    // Seeing if this has the needed param
    // If it doesn't, send them away
    if (!params.has("i")) 
        window.location = '../index.html'
    // Then lets get the team
    var index = params.get("i");
    team = getTeam(index);
    console.log(team);
    // Hide prev button
    document.getElementById("prev").style.visbility = "hidden";
    getStep();
}

function getStep() {
    console.log(`Step : ${step}`);
    // The index of the array we're going into
    var i = 0;
    // Seeing if we're getting the animal type
    var animalType = null;
    // Get the element
    var element = document.getElementById("command");
    // Getting the index
    switch (step) {
        case 0:
        case 1:
            i = 0;
            break;
        case 2:
        case 3:
            i = 1;
            break;
        case 4:
        case 5:
            i = 2;
            break;
        default:
            i = 10;
            break;
    };
    // Telling user that they're done
    if (i === 10) {
        element.innerHTML = "Done!";
        // Hide next button
        document.getElementById("next").style.visibility = "hidden";
        // Leaving function 
        return;
    }
    // Seeing if we're getting the animal type or the weapon
    if (step % 2 === 0)
        animalType = true
    else
        animalType = false
    console.log(`i : ${i}`);
    // Creating a blank string that we'll set the p tag to
    var str = "";
    if (animalType) {
        // Getting position
        var pos = i;
        pos++;
        str = `owo team add ${team["animals"][i]["type"]} ${pos}` ;
    } else {
        str = `owow ${team["animals"][i]["weapon"]} ${team["animals"][i]["type"]}`;
    }
    console.log(str);
    // Setting the p tag
    element.innerHTML = str;
    // Hide element if step is 0
    if (step === 0) 
        document.getElementById("prev").style.visibility = "hidden"
    else
        document.getElementById("prev").style.visibility = "visible";
}

function next() {
    step++;
    getStep();
}

function prev() {
    // Show next button
    document.getElementById("next").style.visibility = "visible";
    step--;
    getStep();
}

