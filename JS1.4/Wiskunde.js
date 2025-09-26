console.log("opgave 1")
function opgave1 (waarde1, waarde2, waarde3){
    console.log(waarde1)
    console.log(waarde2)
    console.log(waarde3)
    let Inhoud0 = (waarde1 * waarde2 * waarde3)
    return Inhoud0
}
let kubusInhoud = opgave1(10, 5, 10)
console.log(kubusInhoud + " Hoog3")

console.log("opgave 2")
function opgave2 (radiusHoog2, pi, hoogte ){
    console.log(radiusHoog2)
    console.log(pi)
    console.log(hoogte)
    let inhoud1 = (radiusHoog2 * pi * hoogte)
    return inhoud1
}
let cylinderInhoud = opgave2(5, Math.PI, 10)
console.log(cylinderInhoud + " Hoog3")

console.log("opgave 3")
function opgave3 (aquad, bquad){
    console.log(aquad)
    console.log(bquad)
    let cquad = (aquad*aquad + bquad*bquad)
    let c = Math.sqrt(cquad)
    return c
}
let langezijde = opgave3(3, 4)
console.log(langezijde + " is de lange zijde van het driehoek")

console.log("opgave 4")
function opgave4 (g1, g2, g3, g4, g5, g6, g7){
    console.log("de zeven getallen zijn " + g1, g2 ,g3, g4, g5, g6, g7)
    let opgetelt = (g1 + g2 + g3 + g4 + g5 + g6 + g7)
    let gemiddelde = (opgetelt / 7)
    return gemiddelde
}
let zevengetallen = opgave4(5, 6, 8, 1, 11, 22, 36)
console.log("het gemiddelde is " + zevengetallen)
