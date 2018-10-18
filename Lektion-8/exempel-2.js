// Skapa egna konstruktorer (Constructors)
// Skapa en blueprint på en helt ny grej

// Exempel- Skapa en konstruktor som beskriver en person
// Person blir en ny typ (prototyp)
function Person(name, age){
    this.name = name;
    this.age = age;
    this.cars = [];
}

// Skapa en konstruktor som beskriver en bil
function Car(regnr, fabrikat){
    this.regnr = regnr;
    this.fabrikat = fabrikat; 
}

// Skapa en instans av Car = skapa ett object
let c1 = new Car('ABC123', 'Volvo');
//console.log(c1.regnr); 
let c2 = new Car('XYZ123', 'Mazda'); 

// Skapa fler object av Person() = skapa nya instanser 
let martin = new Person('Martin', 22);
let kalle = new Person('Kalle', 10);

// Martin och kalle blir två nya referencer till två olika object 

// martin har köpt c1 och c2 (två bilar)

martin.cars.push(c1, c2);
martin.cars[0].regnr
// Ändra Martins egenskaper
martin.name = 'Lindblad';
console.log(martin);

// Skapa en array av ett antal object
let persons = [martin, kalle]; 
// Visa info om första objectet 
console.log(persons[0].name);
persons[0].name = 'Martin'
