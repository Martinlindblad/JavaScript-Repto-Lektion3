function multiply(a, b){
    console.log("****** Multiply******");
    console.log(a*b);
    console.log("*******************************");
}
multiply(10, 5);         // 50
multiply();             //NaN
multiply(100);         // NaN pga att det blir 100 * undentified
multiply('TEXT', 50); // NaN

function log(text){
    console.log("********************");
    console.log("* " + text);
    console.log("********************");
}
log("broret");

// En funkion som anropar en annan funktion
function hello3(msg){
    log(msg)
}
hello3('Hej');


// Funktion med 3 parametrar
function age(firstName, lastName, age = 0){
    console.log(firstName + ' är ' + age + ' år gmammal!');
}
age('Martin', 'Lindblad', 22);
age('Martin'); // 

// En funktion med godtyckligt många parametrar
function manyThings(...things){
    console.log(things);
}
manyThings(1);
manyThings(1,2);
manyThings(1,2,3);
manyThings("Martin", "ingen", "haHAA");
manyThings("martin", "ingenting", 22);
manyThings();