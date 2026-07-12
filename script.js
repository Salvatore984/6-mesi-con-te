// LETTERA SEGRETA PER BUSSINAH 💌
function apriLettera(){

    document.querySelector(".busta").style.display = "none";

    document.getElementById("messaggio").style.display = "block";

function chiudiLettera(){

    document.getElementById("lettera").remove();


    for(let i = 0; i < 30; i++){

        setTimeout(()=>{
            creaCuore();
        }, i * 100);

    }

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
document.addEventListener("click", function(e){

    const cuore = document.createElement("div");

    cuore.innerHTML="❤️";

    cuore.style.position="fixed";
    cuore.style.left=e.clientX+"px";
    cuore.style.top=e.clientY+"px";
    cuore.style.fontSize="25px";
    cuore.style.pointerEvents="none";

    document.body.appendChild(cuore);


    cuore.animate([
        {
            transform:"translateY(0)",
            opacity:1
        },
        {
            transform:"translateY(-100px)",
            opacity:0
        }
    ],{
        duration:1000
    });


    setTimeout(()=>{
        cuore.remove();
    },1000);

});
function creaCuore(){

    const cuore = document.createElement("span");

    cuore.innerHTML = "❤️";

    cuore.style.position = "fixed";
    cuore.style.left = Math.random() * 100 + "vw";
    cuore.style.bottom = "-20px";
    cuore.style.fontSize = (Math.random() * 20 + 20) + "px";
    cuore.style.pointerEvents = "none";
    cuore.style.zIndex = "1000";

    document.body.appendChild(cuore);


    cuore.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: "translateY(-100vh) rotate(360deg)",
                opacity: 0
            }
        ],
        {
            duration: 3000,
            easing: "ease-out"
        }
    );


    setTimeout(()=>{
        cuore.remove();
    },3000);

}
const testoDedica = document.getElementById("dedica");

let testoOriginale = testoDedica.innerHTML;

testoDedica.innerHTML = "";

let posizione = 0;


function scriviDedica(){

    if(posizione < testoOriginale.length){

        testoDedica.innerHTML += testoOriginale.charAt(posizione);

        posizione++;

        setTimeout(scriviDedica, 50);

    }
setTimeout(scriviDedica, 3000);
