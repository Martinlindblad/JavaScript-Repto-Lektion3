let os = ['Windows', 'Macintosh', 'Linux', 'unix', 'ios']

for (let i = 0; i < os.length; i++){
    console.log(os[i]);
}

let data = [
    {name: 'Martin', email: 'Martin@gmail.com'},
    {name: 'bo', email: 'botin@gmail.com'},
    {name: 'jan', email: 'jan@gmail.com'},
    {name: 'emil', email: 'emil@gmail.com'}
];

for (let i = 0; i < data.length; i++ ) {
    console.log(data[i].email)
}

console.log("________for-of______");

for(let obj of data){
    console.log(obj.email);
}

console.log("__________For-In_________");

// For-in-sats
for(let i in data) {
    console.log(i + ': ' + data[i].name);
}

    data = [
    {name: 'Martin', email: 'Martin@gmail.com', 
    adress: {
        street: 'Hejvägen',
        country: 'Hejland',
        zipcode: '123123'
        }
    },
    {name: 'bo', email: 'botin@gmail.com'},
    {name: 'jan', email: 'jan@gmail.com'},
    {name: 'emil', email: 'emil@gmail.com'}
];

for(let obj of data){
    console.log(obj.name + ' bor på ' + obj.adress.street);
}