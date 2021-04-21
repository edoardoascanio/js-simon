var numeriRandom = []
var numeriCorrettiUtente = []
var numeriErratiUtente = []

var tempoTotale = 30;
var clock = document.getElementById("death-clock");
var timer = setInterval(countdown, 1000);

function countdown() {
    if (tempoTotale == -1) {
        clearTimeout(timer);
        
    } else {
        clock.innerHTML = tempoTotale;
        tempoTotale--;
    }

}



while(numeriRandom.length < 5){

    var i = Math.floor(Math.random() * 100) + 1;

    if(numeriRandom.indexOf(i) === -1) numeriRandom.push(i);
}

alert("Simon says:  " + numeriRandom);


