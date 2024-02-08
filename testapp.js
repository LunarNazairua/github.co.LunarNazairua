let correctAnswer = 3; /* The correct answer to the only question? */
var userInput /* PLEASE LET THIS WORK */
let fisrtOutput = document.getElementById("firstOutput")
let secondOutput = document.getElementById("secondOutput")
//I need to learn  how to link a json file :tired:
//https://lunarnazairua.github.io/jsonrepo/tempData.json
//Functions
const planets = {
    "SolarSystem": {
        "Venus": [
            "Venus",
            "Uninhabitable",
            "2nd",
            "..."
        ],
        "Earth": [
            "Earth",
            "Our Location",
            "3rd",
            "The origin planet fo the human race, we thrive here. We protect and damage the world, it is our playground."
        ],
        "Mars": [
            "Mars",
            "Uninhabitable",
            "4th",
            "We have our eyes sighted on mars as the next earth, we will terraform it into the perfect planet for humans."
        ]
    }
}

const personalInfo = {
    "name": "Lunar",
    "Lname": "Nazairua"
}

function jsonTest() {
    fisrtOutput.innerHTML = planets.Name
    secondOutput.innerHTML = planets.LastName
}