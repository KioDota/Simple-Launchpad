var Snare1 = new Audio();
Snare1.src = 'https://instaud.io/_/3Oal.wav';
var HiHat1 = new Audio();
HiHat1.src = 'https://instaud.io/_/3OaS.wav';


document.addEventListener('keydown', function (evt) {
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 65: //keyCode for A
            var Kick1 = new Audio();
            Kick1.src = 'https://instaud.io/_/3Oaj.wav';
            if (typeof Kick1.loop == 'boolean') {
                Kick1.loop = true;
            } else {
                Kick1.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            Kick1.play();
            break;

        case 83:  //keyCode for S
            Kick1.pause();
            break;

        case 68: //keyCode for D
            Snare1.play();
            break;

        case 79: //keyCode for O
            HiHat1.play();
            break;
    }
});