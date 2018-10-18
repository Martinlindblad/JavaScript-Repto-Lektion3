// Arbeta med konstruktorer 

// Skapa ett nytt object med hjälp av en konstruktor 
let martin = new Object();

// Egenskaper
martin.name = "Martin Lindblad";
martin.age = 22;

// Metoder

// En metod som skriver ut 
martin.print = function(){
    console.log(this.name + 'är ' + this.age + ' år gammal');
}

// En metod som returnerar en sträng 

martin.info = function(){
    //return this.name + ' är' + this.age + ' år gammal'
    return `
    ${this.name} är ${this.name} år gammal.
    `; 
}

// Använd objektets egenskaper
console.log(martin.name);

// Använd object metoder 

// Literal


martin.print();
console.log(martin.info());

let Martin = {
    first : 'Martin',
    last : 'Lindblad',
    
    hej:function(){
        console.log(this.name + ' är ' + this.age + ' år gammal');
    },
    hej2:function(){
        return this.first+' är ' + this.last + ' år gammal.'
    }
}
console.log(martin.hej2);
martin.mobile = '0123123123';
martin.run = 'Running...';
console.log(martin.info);
console.log(martin.mobile);
console.log(martin.hej);

// Sammanfattning - Olika sätt att skapa ett objekt i JS 
// 1. Literal Notation
let vadSomHelst = {};

// 2. constructor Notation
let ettAnnatObject = new Object();