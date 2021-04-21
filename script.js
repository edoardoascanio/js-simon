var numeriRandom = []
var numeriCorrettiUtente = []
var numeriErratiUtente = []

var tempoTotale = 30;
var clock = document.getElementById("death-clock");
var timer = setInterval(countdown, 1000);

function countdown() {
    if (tempoTotale == -1) {
        clearTimeout(timer);
        parseInt(prompt("Inserisci i numeri precedenti"))
        
    } else {
        clock.innerHTML = tempoTotale;
        tempoTotale--;
    }
}


while(numeriRandom.length < 5){

    var i = Math.floor(Math.random() * 10) + 1;

    if(numeriRandom.indexOf(i) === -1) numeriRandom.push(i);
}

alert("Simon says:  " + numeriRandom);


function arrayUguali(numeriRandom, numeriCorrettiUtente) {

    if (!Array.isArray(numeriRandom) || ! Array.isArray(numeriCorrettiUtente) || numeriRandom.length !== numeriCorrettiUtente.length)
      return false;

    var numeriRandom = numeriRandom.concat().sort();
    var numeriCorrettiUtente = numeriCorrettiUtente.concat().sort();

    for (var i = 0; i < numeriRandom.length; i++) {

        if (numeriRandom[i] !== numeriCorrettiUtente[i]){
            return false;
        }else{
            alert("Hai Vinto!")
        }          
    }

    return true;
}
