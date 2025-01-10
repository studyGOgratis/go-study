let vragen = ["je","il"];
let antwoorden = ["ik","hij"];
let antwoord_oud = antwoorden;
let mode = 1
let vraag = 0;
let MEERKEUZE_ANDWOORD_G_of_F = false;

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
    if(mode == 2){
        console.log("MEERKEUZE")
    }
}
function AntwoordGoed() {
    vragen.splice(vraag, 1);
    antwoorden.splice(vraag, 1);
    if(mode == 1){
    goTo("gostudy.html");
    return
    }
    if(mode == 2){
        goTo("MEERKEUZE.html");
        return
    }

}
function MEERKEUZE_ANDWOORD_UI(){
    document.getElementById("MEERKEUZE_ANDWOORD").innerHTML = document.getElementById("MEERKEUZE_ANDWOORD").innerHTML + vragen[vraag];
}