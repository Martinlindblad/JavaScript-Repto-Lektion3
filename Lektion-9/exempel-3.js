// Arbeta med datum och tid i JavaScript 

// Skapa en instans av objectet Date
/*
let today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

console.log(today.toDateString());
console.log(today.toTimeString());
*/
let day = new Date();
year = day.getFullYear();
month = day.getMonth() + 1;
dag = day.getDate();
console.log(year + '-' + month + '-' + dag);


let day2 = new Date();
hour = day2.getHours();
min = day2.getMinutes();
sec = day2.getSeconds();
console.log(day2.toTimeString(hour+min+sec));


let day3 = new Date();
hour = day3.getHours();
min = day3.getMinutes();
sec = day3.getSeconds();
console.log(day3.toDateString(hour+min+sec));
/*
Visa datum i detta format Dag den xx månad årt.ex.Onsdag den 17 oktober 2018Tips: Använd 
arrayerför att 
lagra veckodagar och månader.
*/
let da = ['Söndag', 'Måndag','Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']
    
let mo = ['January', 'February', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'Spetember', 'Oktober', 'November', 'December']
function tid(){
    let dat = new Date();
    let d = dat.getDay();
    let m = dat.getMonth();
    let y = dat.getFullYear();
    return da[d] + 'Den ' +  mo[m] + y; 

}
console.log(tid());


let x = new Date();
setInterval()
 


