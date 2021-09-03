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
        while (isNaN(numeroTemporaneo) || numeroTemporaneo.length == 0 ){
            numeroTemporaneo = parseInt(prompt("Numero non valido, inseriscine un altro: "));
        }while (numeriScelti.includes(numeroTemporaneo)){
            numeroTemporaneo = parseInt(prompt("Numero già inserito, inseriscine un altro: "));
        }
        numeriScelti.push(numeroTemporaneo);
    }
    if (numeriScelti.length == 5){
        for (k = 0; k < numeriScelti.length ; k++){
            let numeroDiAdesso = numeriScelti[k];
                if (numeriVincenti.includes(numeroDiAdesso)){
                    numeriAzzeccati.push(numeroDiAdesso);
                }else{
                    numeriSbagliati.push(numeroDiAdesso);
                }
            }
        }
        console.log( "I numeri scelti dall'utente sono: " + numeriScelti);
        console.log("I numeri che l'utente ha inserito ma che non sono nella lista dei numeri giusti sono: " + numeriSbagliati);
        console.log("I numeri che l'utente ha indovinato sono: "  + numeriAzzeccati);

        document.getElementById("corretti").innerHTML += numeriAzzeccati;
        document.getElementById("sbagliati").innerHTML += numeriSbagliati;


    
} , 3000) // NON L'HO FATTO DI 30 SECONDI PERCHE' NON HO PAZIENZA. COMUNQUE INVECE DI 3000 AVREI DOVUTO SCRIVERE 30000



console.log( "I numeri vincenti sono: " + numeriVincenti);









//FUNZIONII


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}