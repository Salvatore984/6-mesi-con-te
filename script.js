// LETTERA SEGRETA PER BUSSINAH 💌

function apriLettera(){

    document.getElementById("messaggio").style.display = "block";

}


function chiudiLettera(){

    document.getElementById("messaggio").style.display = "none";

    document.querySelector(".busta").style.display = "block";

}
// CONTATORE TEMPO INSIEME ❤️

const dataInizio = new Date("2026-01-12");


function aggiornaTempo(){

    const oggi = new Date();

    const differenza = oggi - dataInizio;


    const giorni = Math.floor(
        differenza / (1000 * 60 * 60 * 24)
    );


    const ore = Math.floor(
        (differenza / (1000 * 60 * 60)) % 24
    );


    const minuti = Math.floor(
        (differenza / (1000 * 60)) % 60
    );


    const secondi = Math.floor(
        (differenza / 1000) % 60
    );


    document.getElementById("tempo").innerHTML =
    giorni + " giorni ❤️ " +
    ore + " ore " +
    minuti + " minuti " +
    secondi + " secondi";

}



setInterval(aggiornaTempo, 1000);

aggiornaTempo();

