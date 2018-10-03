// Arbeta med typer (datatyper)

// 1. string
let firstName = "Martin";
let lastName= "Lindblad";
console.log(firstName, lastName);
console.log("It's very nice");
console.log(`I Love You!, JK`); // Backtics (överkurs)

// 2. number
let age = 45;
const PI = 3.14159;
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);
let again = false;
if (again)
    console.log("Inne i if-satsen")
again = true; 
if (again)
    console.log("Inne again i for-satsen");
    
// 4. Undefined (OBS! Detta är en typ i JS)
let name;
console.log(name);

console.log(mobile);
// OK eftersom mobile har deklarerats med var
var mobile;
mobile = "070-12938012";

console.log(adress); // fel Inte använda let innan variable
let adress;
adress = "Hem 123"

// 5. null
let ingenting = null;
console.log(ingenting);
console.log("----------------------");
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof again);
console.log(typeof name);
console.log(typeof ingenting);





