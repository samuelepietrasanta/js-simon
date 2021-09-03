/*
DESCRIZIONE:


-  Un alert() espone 5 numeri generati casualmente.
-  Da li parte un timer di 30 secondi.
-  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
   tramite il prompt().
-  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
   dei numeri da indovinare sono stati individuati.



*/


let numeriVincenti = [];
let numeriScelti = [];
let numeriAzzeccati = [];
let numeriSbagliati = [];



for (i = 0 ; i < 5 ; i++){
    let numeroAttuale = getRandomInt(1 , 100);
    numeriVincenti.push(numeroAttuale);
}




alert("I numeri vincenti che devi ricordare sono:  " + numeriVincenti);


setTimeout(function(){
    for (j = 0; j < 5; j++){
        let numeroTemporaneo = parseInt(prompt("Inserisci un numero: "));
        while (isNaN(numeroTemporaneo)){
            numeroTemporaneo = parseInt(prompt("Numero non valido, inseriscine un altro: "));
        }numeriScelti.push(numeroTemporaneo);
    }
} , 300)

for (k = 0; k < numeriScelti.length ; k++){
    if (numeriVincenti.includes(numeriScelti[k])){
        numeriAzzeccati.push(numeriScelti[k]);
    }else{
        numeriSbagliati.push(numeriScelti[k]);
    }
}

console.log(numeriVincenti);
console.log(numeriScelti[3]); // Non capisco perché mi dà undefinedù
console.log(numeriScelti);    // MA questo lo stampa
console.log(numeriAzzeccati);
console.log(numeriSbagliati);









//FUNZIONII


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}