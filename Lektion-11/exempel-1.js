// Arbeta med interaktioner 

// For-satsen
//Exempel 1
for(let i = 0 ; i < 10 ; i++) { // skriver ut talen mellan 0-10
    if(i%3 === 0)
        console.log(i);
}

//exempel 2
for(let i = 1 ; i <= 10 ; i++) {
    console.log(i);
}
//exempel 3
let str = '';
for(let i = 1 ; i <= 10 ; i=i+2) {
    str += i
    if (i < 10){
        str += ' , '; // Visar inte sista ,
    }
}  
console.log(str);
// 1, 3 , 5, 7, 9

// Exempel 4
for(let i = 1 ; i <= 10; i++){
    // Skriv ut enbart tal som är jämnt delbart med 3
    if(i%3 === 0){ // Ingen rest vid division med 3 
        console.log(i);
    }
}