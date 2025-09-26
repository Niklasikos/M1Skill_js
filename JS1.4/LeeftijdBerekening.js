function berekening (year, month, day){
    console.log(year);
    console.log(month);
    let birth = new Date(year, month, day); 
    let now = new Date();
    let milliseconds = now-birth
    let seconds = milliseconds/1000
    let minutes = seconds/60
    let hours = minutes/60
    let days = hours/24
    let years = days/365
    return years
}
let leeftijd = berekening(1993, 2, 8);
console.log(leeftijd);



