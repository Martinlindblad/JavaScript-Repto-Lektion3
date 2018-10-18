// Arbeta med Objecetet Number

let PI = 3.14159;
console.log(typeof PI);
// Avrunda till två decimaler
console.log(PI.toFixed(2)); // 3.14
console.log(PI.toPrecision(2)); // 3.1

// Visa Max och min-värde på ett nummer i JS 
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);
console.log(Number.MAX_VALUE + 10000); // Skriver inte ut fel medelande, skippar 10000
console.log(Number.MAX_VALUE * 2); // Infinity


// NaN 
let x;
console.log(x); // Undefined
x = x + 2; // NaN
console.log(x); 
// Statiska metoder
console.log(Number.isNaN()); // False
console.log(Number.isNaN(x)); // True


// Objectet Math

PI = Math.PI;
console.log(PI);

console.log(Math.E);

console.log(Math.abs(-1238));
console.log(Math.pow(2,2));
console.log(Math.pow(2,4));
console.log(Math.pow(3,2));// upphöjt i, 3^2 = 9
console.log(Math.sqrt(25));// roten ur

// Avrunda till närsmaste heltal
let pris = 10.40;
console.log(Math.round(pris));
pris = 10.50;
console.log(Math.round(pris));
console.log(pris.toFixed());

// Ciel och Floor
let tal = 10.10;
console.log(Math.ceil(tal)); // 11
tal = 10.99;
console.log(Math.floor(tal)); // 10

// Max och Min 
console.log(Math.max(1,23,3124,412,2));
console.log(Math.min(1,23,3124,-412,2));


// Övning 

function maxArray(tal){
    return Math.max(...tal); // Tips: ... är en operator i JS
    // Som heter Spread Operator
}
console.log(maxArray([10, 4, 5]));

// Slumptal 
console.log(Math.random());
console.log(Math.floor(Math.random()* 10) + 1); // Mellan 1-10
console.log(Math.floor(Math.random()* 10));
console.log(Math.floor(Math.random()* 10));
console.log(Math.floor(Math.random()* 10));
console.log(Math.floor(Math.random()* 10));