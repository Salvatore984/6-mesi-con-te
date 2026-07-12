// LETTERA SEGRETA PER BUSSINAH 💌
function apriLettera(){

    document.querySelector(".busta").style.display = "none";

    document.getElementById("messaggio").style.display = "block";

}


function chiudiLettera(){

    document.getElementById("lettera").remove();

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
function creaStella(){

    const stella = document.createElement("span");

    stella.innerHTML = "✨";

    stella.style.left = Math.random()*100 + "vw";
    stella.style.top = Math.random()*100 + "vh";

    document.getElementById("stelle").appendChild(stella);


    setTimeout(()=>{
        stella.remove();
    },5000);

}


setInterval(creaStella,800);
