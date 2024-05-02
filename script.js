function changeToCat() {
    document.getElementById("description").innerHTML = "This is a cute cat.";
    document.getElementById("cuteAnimal").src = "./img/cat.webp";
    document.getElementById("catButton").style.background = "rgb(255, 74, 74)";
    document.getElementById("dogButton").style.background = "darkcyan";
    document.getElementById("hamsterButton").style.background = "darkcyan";
}

function changeToDog() {
    document.getElementById("description").innerHTML = "This is a cute dog.";
    document.getElementById("cuteAnimal").src = "./img/dog.webp";
    document.getElementById("catButton").style.background = "darkcyan";
    document.getElementById("dogButton").style.background = "rgb(255, 74, 74)";
    document.getElementById("hamsterButton").style.background = "darkcyan";
}

function changeToHam() {
    document.getElementById("description").innerHTML = "This is a cute hamster.";
    document.getElementById("cuteAnimal").src = "./img/hamster.jpg";
    document.getElementById("catButton").style.background = "darkcyan";
    document.getElementById("dogButton").style.background = "darkcyan";
    document.getElementById("hamsterButton").style.background = "rgb(255, 74, 74)";
}
