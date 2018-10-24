// Truthy & Falsy
// Följande värden är alltid falska i JS
// 0
// null
// NaN
// False
// ''
// "" 
// undefined

//if(false || 0 || null || NaN || undefined || '' || "" )
  //  console.log("Vi kommer aldrig hit");

  /*function getDay(){
      let day;
      switch (new Date().getDay()){
          case 0: day = "Söndag"; break;
          case 1: day = "Måndag"; break;
          case 2: day = "Tisdag"; break; 
          case 3: day = "Onsdag"; break;
          case 4: day = "Torsdag"; break;
          case 5: day = "Fredag"; break;
          case 6: day = "Lördag"; break;
          
      }
      return day;
  }
  console.log("Det är " + getDay() + " idag, fan va oooooskööönt!");
  

  let kort = prompt("Ange priset för årskort: ");
  let biljett = prompt("Ange priset för vanlig biljett: ");
  let antal = prompt("Ange antal besök per år: ");
  if(kort < biljett * antal){
      alert("Det är mer värt att köpa årskort!")
  }else{
      alert("Det är mer värt att köpa engångsbiljett")
  }
*/


/*
    let betyg = prompt("Ange antal poäng: ")
    let newBetyg = "";
    if(betyg >= 45){
        newBetyg= ("A");
    }else if(betyg >= 40){
        newBetyg= ("B");
    }else if(betyg >= 35){
        newBetyg= ("C");
    }else if(betyg >= 30){
        newBetyg= ("D");
    }else if(betyg >= 25){
        newBetyg= ("E");
    }else{
        alert("IG");
    }
    alert(newBetyg)
  */  
function getGrade(poäng){
    let grade = ""; 
    switch(true){ 
        case poäng >= 45: grade = "A"; break; 
        case poäng >= 40: grade = "B"; break; 
        case poäng >= 35: grade = "C"; break; 
        case poäng >= 30: grade = "D"; break; 
        case poäng >= 25: grade = "E"; break; 
        default : grade = "IG";break;
    }
    return(grade);
}
grade = getGrade(prompt("Skriv in ditt betyg: "))
alert("Ditt betyg är: " + grade)