let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if(huidigeTijd.getHours() > 8 && huidigeTijd.getHours() < 17){
console.log("Je moet op school zijn!");
}
else{
console.log("Jij bent lekker vrij!");
}