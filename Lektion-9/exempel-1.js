// Arbeta med inbyggda globala JS-Object

// Obejectet String

let firstName = 'Martin';
console.log(typeof firstName);

let antal = firstName.length;

console.log(antal);  // 6

// Konventera till gemener
firstName.toLowerCase();
console.log(firstName);
// OBS! Vi måste lagra resultatet
firstName = firstName.toLowerCase();
console.log(firstName);
firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toUpperCase();

// Konkatenering
let lastName = 'Lindblad';
fullName = firstName.concat(' ' + lastName)
console.log(fullName);



// Substring
console.log(fullName.substring(0,6));
console.log(fullName.substring(7));
let space = fullName.indexOf(' ');
console.log(fullName.substring(space + 1));
console.log(space);
console.log(fullName.substring(space + 1));

// substr()
// 'Martin Lindblad'
console.log(fullName.substr(7,2)); // 

// Strängar i JS indexseras på samma sätt som arrayer
console.log(fullName[0]); // m
// Skriv u sista tecknet 
console.log(fullName[fullName.length-1]);

let arrTest = [1,2,3];
console.log(arrTest.length);
// Skriv ut elementet i arrayen
console.log(arrTest[arrTest.length-1]);

// Skriv u första mellanslaget
console.log(fullName.indexOf(' '));

// Skriv ut index på första mellanslag
console.log(fullName.lastIndexOf(' '));

let newName = 'Kalle Anka';
console.log(newName.indexOf(' ')); // 5 
console.log(newName.lastIndexOf(' ')); // 5 varför?

console.log(fullName.charAt(1));

// split()
let nameArray = fullName.split();
console.log(nameArray); // ['Martin Lindblad']
nameArray = fullName.split('') // OBS en tom sträng
console.log(nameArray); // [ 'M', 'A', 'R', 'T', 'I', 'N', ' ', 'L', 'i', 'n', 'd', 'b', 'l', 'a', 'd' ]
nameArray = fullName.split(' '); // OBS! mellanslag
console.log(nameArray);
fullName = "Martin;Lindblad";
nameArray = fullName.split(';'); 
fullName = "     Martin       Lindblad       ";
fullName = fullName.trim();
nameArray = fullName.split(' ');
// Chaining. En sats istället för två förgånede satser
nameArray = fullName.trim().split(' ');
console.log(nameArray);




fullName = "Martin;Lindblad";
// Byt ut ; mot mellanslag
fullName = fullName.replace(';', ' ');
console.log(fullName);

// Escape-tecken
// \n new line 
console.log("hej\nVälkommen\n");
console.log('Hej och välkommen till \'JS\'');
console.log("Namn\tE-post");
console.log("Martin\tmartin@hksfme.com"); // \t endast i console
console.log("Namn   E-post");
console.log("Martin    martin@hksfme.com"); // \t endast i console

// 
function capitalize(x){
    // Den första bokstaven 
    let firstChar = x.charAt(0);
    // Omvandla första tecknet till versal
    firstChar = firstChar.toUpperCase();
    // Hämta resten. Från tecken 2 (index 1) till slutet
    let resten = x.slice(1); // eller substring(1)
    // Skapa en ny sträng
    let result = firstChar + resten;
    return result;

}
function capitalize2(x){
    return x.charAt(0).toUpperCase() + x.substring(1);
}

let test = "hej och välkommen!";
console.log(capitalize(test));