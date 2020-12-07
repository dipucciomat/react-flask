let sounds = {};
sounds.countdown = new Audio();
sounds.countdown.src = "./audio/gonga-2.wav";

export let play = sound => {
    if (sounds[sound]) {
        console.log(sound);
        console.log(sound);
        console.log(sounds[sound]);
        sounds[sound].currentTime = 0;
        sounds[sound].play();
    }
};

export let stop = sound => {
    if (sounds[sound]) {
        sounds[sound].pause();
    }
};