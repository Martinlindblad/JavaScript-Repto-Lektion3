let now = new Date();
console.log(now);

let year = now.getFullYear();
console.log(year);

let month = now.getMonth() + 1;
if (month<10){
    month = '0' + month;
}

let day = now.getDate();
if (day<10){
    day = '0' + day;
}

let today = year + "-" + month + "-" + day;
console.log(today);

// Använd toDateString();

let idag = new Date();
let idagstr = idag.toDateString();
console.log(idagstr);
// Hämta år från strängen Fri Oct 26 2018

let ar = idagstr.substring(11)
console.log(ar);

let da = idagstr.substring(8, 10)
// let da = idagstr.substr(8, 2) start, antal 

let mo = idagstr.substring(4,7);
switch(mo){
    case 'Jan' : mo = '01'; break;
    case 'Feb' : mo = '02'; break;
    case 'Mar' : mo = '03'; break;
    case 'Apr' : mo = '04'; break;
    case 'May' : mo = '05'; break;
    case 'Jun' : mo = '06'; break;
    case 'Jul' : mo = '07'; break;
    case 'Aug' : mo = '08'; break;
    case 'Sep' : mo = '09'; break;
    case 'Oct' : mo = '10'; break;
    case 'Nov' : mo = '11'; break;
    case 'Dec' : mo = '12'; break;

}
console.log(mo);
//Skapa stängen

let result = ar + '-' + mo + '-' + da; 

// Enklaste lösningen 

console.log(new Date().toLocaleDateString());

let dat = new Date();
console.log(dat.toLocaleDateString());

console.log("_______9.2______");

datum = new Date();
console.log(datum.toTimeString().substring(0,8));

console.log("_______9.3______");

datum = new Date();
console.log(datum);
day = datum.getDay();
year = datum.getFullYear();
month = datum.getMonth();
date = datum.getDate();
console.log(year, month, day);

let monthArray = [
    'Januari',
    'Februari',
    'Mars', 
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'Decemeber'
];
console.log(monthArray[month]);

let dayArray = [
    'Söndag',
    'Måndag',
    'Tisdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lördag'
];
console.log(dayArray[day]);

// dah = veckodagar[day];
//month = monthArray[month];
//result = dah + ' Den ' + date;


console.log("_______9.4______");

datum = new Date();
console.log(datum.toTimeString().substring(0,8));
