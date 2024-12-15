let vragen = ["je","il"];
let antwoorden = ["ik","hij"];
let lasted_vraag = "sdigfysgyfegfygsuygyfghdmncsbyuuaihwuay8748wy468w7yhduybfkyzytfeufiuysudkbfaw736i8w7yhaiuw3hbqyik27yqo0o78ieygfoiwubhrfuiyr8ai7yewiouhs";
let vraag = 0;

function nieuwe_vraag(){
    if (vragen.length == 0) {
        // reload the page to clear evrything
        window.location.reload();
    }
    vraag = Math.floor(Math.random() * vragen.length);
    if (vraag == lasted_vraag && ! vragen.length == 1) {
        nieuwe_vraag();
        
    }
    lasted_vraag = vraag;
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
