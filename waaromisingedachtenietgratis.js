let vragen = ["je", "il"];
let antwoorden = ["ik", "hij"];
const MEERKEUZE_KEUZES = ["MEERKEUZE_A", "MEERKEUZE_B", "MEERKEUZE_C", "MEERKEUZE_D"];
let antwoord_oud = antwoorden;
let vragen_oud = vragen;
let mode = 1
let vraag = 0;
// E
let MEERKEUZE_ANDWOORD_G_of_F = false;

function nieuwe_vraag() {
    if (vragen.length == 0) {
        // reload the page to clear evrything
        window.location.reload();
    }
    vraag = Math.floor(Math.random() * vragen.length);
}
function vraag_UI() {
    document.getElementById("vraag").innerHTML = vragen[vraag];
    if (mode == 2) {
        let MEERKEUZE_KEUZES_temp = [...MEERKEUZE_KEUZES];
        temp = Math.floor(Math.random() * 4);

        document.getElementById(MEERKEUZE_KEUZES_temp[temp]).innerHTML = antwoorden[vraag];
        document.getElementById(MEERKEUZE_KEUZES_temp[temp]).setAttribute('href', "javascript:eval('AntwoordGoed()')");
        MEERKEUZE_KEUZES_temp.splice(temp, 1);
        MEERKEUZE_KEUZES_temp.forEach(element => {
            let jeff = document.getElementById(MEERKEUZE_KEUZES_temp[MEERKEUZE_KEUZES_temp.indexOf(element)])
            let random = Math.floor(Math.random() * antwoorden.length)
            if (vragen[random] == vraag) {
                return null
            }
            jeff.innerHTML = antwoorden[random];
            jeff.setAttribute('href', "javascript:eval('AntwoordFout()')");
            MEERKEUZE_KEUZES_temp.splice(MEERKEUZE_KEUZES_temp.indexOf(element), 1);
        });
        let jeff = document.getElementById(MEERKEUZE_KEUZES_temp[0])
        let random = Math.floor(Math.random() * antwoorden.length)
        if (vragen[random] == vraag) {
            let random = Math.floor(Math.random() * antwoorden.length)
        }

        if (vragen[random] == vraag) {
            let random = Math.floor(Math.random() * antwoorden.length)
        }

        if (vragen[random] == vraag) {
            let random = Math.floor(Math.random() * antwoorden.length)
        }

        if (vragen[random] == vraag) {
            let random = Math.floor(Math.random() * antwoorden.length)
        }
        jeff.innerHTML = antwoorden[random];
        jeff.setAttribute('href', "javascript:eval('AntwoordFout()')");
    }
}
function antwoord_UI() {
    document.getElementById("antwoord").innerHTML = antwoorden[vraag];
}
function AntwoordGoed() {
    vragen.splice(vraag, 1);
    antwoorden.splice(vraag, 1);
    if (mode == 1) {
        goTo("gostudy.html");
        return
    }
    if (mode == 2) {
        goTo("goed.html");
        return
    }

}
function MEERKEUZE_ANDWOORD_UI() {
    document.getElementById("MEERKEUZE_ANDWOORD").innerHTML = document.getElementById("MEERKEUZE_ANDWOORD").innerHTML + antwoorden[vraag];
}

function AntwoordFout() {
    if (mode == 2) {
        goTo("MEERKEUZE_ANDWOORD.html");
        return
    }
}
function startup() {
    antwoord_oud = antwoorden;
    vragen_oud = vragen;
}