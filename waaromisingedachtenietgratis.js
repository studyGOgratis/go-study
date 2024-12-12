let vragen = ["je","il"];
let antwoorden = ["ik","hij"];
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