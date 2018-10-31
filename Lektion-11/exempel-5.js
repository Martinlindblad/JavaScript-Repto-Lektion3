// Nästlade loopar 

// Skapa en mulitiplikations tabell i JStable
let table = '';
for (let row = 1; row <= 10; row++){
    for (let col = 1; col <= 10; col++){
        table += row*col + '\t';
    }
    table += '\n'
}
console.log(table);