// Form = Insert User Name

var name = prompt("Insert your Name");

//Form = insert user surname

var surname = prompt("Insert your Surname");

//Form = favourite Color

var favColor = prompt("Almost done! Insert your Favorite Colour");

//var Number

var number = 19;

//Input Results
var personalData = document.getElementById("personal-data").style.display =
    "block";
var personalData = document.getElementById("personal-data").innerHTML =
    name + surname + favColor + number;
