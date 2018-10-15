// Arbeta med objekt i JS

// Objektliteral ( object literal)
// Skapa objekt med hjälp av {}


let martin = {};
let kalle = {
   // Egenskaper
    name : 'Kalle', // Egenskap
    age : 45,
    weight: 90,
    isMarried: false,
    children : [],
    // Metoder
    printInfo: function(){
        console.log(this.name + ' är ' + this.age + ' år gammal');
    }
};
console.log(kalle); // skriver ut hela objektet 
console.log(kalle.name);
kalle.printInfo();
kalle.name = "Kalle Anka";
kalle.age++; // öka med ett
kalle.age = kalle.age +1;
kalle.age += 1;
kalle.age--; // Minska med 1
kalle.age -= 1;
kalle.age = kalle.age -1;


// Ta bort egenskaper
delete kalle.weight;
console.log(kalle.weight); // Undefiend
console.log(kalle); // Weight sajbas!!!

// Lägg till egenskaper 
kalle.height = 170;
console.log(kalle);

// Ta bort object
kalle = null; 
console.log(kalle);


