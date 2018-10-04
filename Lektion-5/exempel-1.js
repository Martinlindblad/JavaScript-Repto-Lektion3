// Arbeta med arrayer

//Skapa en tom array 
let cars1 = [];

//SKapa ne array some innehåller data 
let cars2 = ["Volvo", "Saab", "BMW"];
//Detta är en array-literal

//Skapa ne array med en konstruktor
let cars3 = new Array(1, 2, 3);
let cars4 = new Array(); // en tom array

// Att komma åt data
console.log(cars2[0]);
console.log(cars2[1]);
console.log(cars2[2]);
console.log(cars2);
console.log(cars2[3]);

// Hämta ett element och spara i en ny variabel
let bil1 = cars2[0];
console.log(bil1);

// Ändra ett element 
cars2[0] = "Mazda";
console.log(cars2);
console.log(bil1);

// En array kan inte innehålla olika typer 
let person = ["Martin", "Lindblad", 45, true];

// Du kan skapa 4 olika variablar istället för en array
let firstName = "Martin";
let lastName = "Lindblad";
let age = 45;
let snygg = true; 

// Hitta antal element med egenskapen length
let antal = person.length;

// Sortera en array
console.log(cars2);
cars2.sort();
console.log(cars2);
