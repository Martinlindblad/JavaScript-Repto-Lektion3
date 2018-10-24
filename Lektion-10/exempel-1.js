let score = 60;
if(score >= 50){
    congratulate();
}
else{
    encourage();
}
function congratulate(){
    console.log("Congratulations");
}
function encourage(){
    console.log("Have another go!");
}


// if... else-if-satsen
 let hour = new Date().getHours();
 // console.log(hour);
let greeting = "";
 if(hour < 12){
    greeting = "God morgon";    
}
else if(hour < 17){
    greeting = " God dag";
}
//console.log(greeting);
else{
    greeting = "God Kväll";
}
/*
// == eller ===
let x = '5'; // eller "5"
console.log(typeof x ); // string

let y = 5; 
console.log(typeof y); // number

if (x==5){
    console.log(x + 5); // 55
}
if(y == 5){  //ok. men....
    console.log(y + 10); // 15
}
x = '5';
if(x===5){ // False
    console.log(x+2);
}

x = '5';
if(x!==5){ // True
    console.log(x+2); // 52
}

x = '5';
if(x!=5){ // False
    console.log(x+2);
}*/




// Ternary-operatorn ? : 
// Villkor ? Om sant : Om falskt 
function getFee(isMember){
    return isMember ? "20kr" : "100kr";
}
console.log(getFee(true));
console.log(getFee(false));

function getFeeVersion2(isMember){
    if(isMember) {
    return "20kr";
} else{
    return "100kr"
}
}