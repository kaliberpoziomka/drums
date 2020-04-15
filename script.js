function preload() {
    let clap = loadAudio("clap.wav");
let boom = loadAudio("boom.wav");
let hihat = new Audio("hihat.wav");
var kick = new Audio("kick.wav");
var openhat = new Audio("openhat.wav");
var ride = new Audio("ride.wav");
var snare = new Audio("snare.wav");
var tink = new Audio("tink.wav");
var tom = new Audio("tom.wav");
}


let keys = [65, 83, 68, 70, 71, 72, 74, 75, 76]
let sounds = [clap,boom, hihat, kick, openhat, ride, snare, tink, tom]
let buttons = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine']

document.addEventListener("keydown", (event) => {
for (let i = 0; i < keys.length; i++ )
    if(event.keyCode === keys[i]){
        
        //audio = document.getElementById(sounds[i]);
        audio = sounds[i];
        audio.currentTime = '0';
        audio.play();
        
        document.getElementById(buttons[i]).focus();
        setTimeout(function(){
            document.getElementById(buttons[i]).blur();
        }, 200);
    }
})
