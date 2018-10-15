// Scope (räckvidd)

// Lokala variablar 
{
    let x = 10;
    console.log(x);
}
//console.log(x); // refernece error: x is not defiend


{
    var y = 10;
    console.log('y = ' + y);
}
console.log('y = ' + y);

console.log('---------------------------------------------');

// Varibaler inne i funktioner är alltd lokala 
function demo(){
    var local_1 = 1;
    var local_2 = 2;
    console.log(local_1);
    console.log(local_2);
}
demo();
// Att skriva ut lokala variablar uanför funkionen => ERROR
//console.log(local_1); // Reference error : local_1 is not defiend
//console.log(local_2); // Reference errror: local_1 is not defined

console.log('----------------------------------');
// Globala variabler 

var global_1 = 10;
let global_2 = 20;
console.log(global_1);
console.log(global_2);


console.log("------------Global och lokal variabel--------");
var global_3 = 'En global variabel ';

function demo2 (){
    let local_3 = 'En lokal variabel'
    console.log(local_3);
}
demo2();
console.log(local_3); // ReferenceError: local_3 is not defined