/*
DESCRIZIONE:


-  Un alert() espone 5 numeri generati casualmente.
-  Da li parte un timer di 30 secondi.
-  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
   tramite il prompt().
-  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
   dei numeri da indovinare sono stati individuati.



*/





//FUNZIONII


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}