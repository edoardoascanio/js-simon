var numeriRandom = []
var numeriCorrettiUtente = []
var numeriErratiUtente = []


while(numeriRandom.length < 5){

    var i = Math.floor(Math.random() * 100) + 1;

    if(numeriRandom.indexOf(i) === -1) numeriRandom.push(i);
}

alert("Simon says:  " + numeriRandom);