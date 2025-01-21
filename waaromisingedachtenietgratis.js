<<<<<<< HEAD
let vragen = ["je","il"];
let antwoorden = ["ik","hij"];
let lasted_vraag = "sdigfysgyfegfygsuygyfghdmncsbyuuaihwuay8748wy468w7yhduybfkyzytfeufiuysudkbfaw736i8w7yhaiuw3hbqyik27yqo0o78ieygfoiwubhrfuiyr8ai7yewiouhs";
=======
let vragen = ["je", "il"];
let antwoorden = ["ik", "hij"];
const MEERKEUZE_KEUZES = ["MEERKEUZE_A", "MEERKEUZE_B", "MEERKEUZE_C", "MEERKEUZE_D"];
let antwoord_oud = antwoorden;
let vragen_oud = vragen;
let mode = 1
>>>>>>> parent of a530fab (Merge branch 'main' into beta)
let vraag = 0;

function nieuwe_vraag(){
    if (vragen.length == 0) {
        // reload the page to clear evrything
        window.location.reload();
    }
    vraag = Math.floor(Math.random() * vragen.length);
}
function vraag_UI() {
    document.getElementById("vraag").innerHTML = vragen[vraag];
}
function antwoord_UI() {
    document.getElementById("antwoord").innerHTML = antwoorden[vraag];
}
function AntwoordGoed() {
    vragen.splice(vraag, 1);
    antwoorden.splice(vraag, 1);
    goTo("gostudy.html");

}
<<<<<<< HEAD
=======
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
>>>>>>> parent of a530fab (Merge branch 'main' into beta)
