document.addEventListener('keydown', function (evt) {
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 65: //keyCode for A
            var Kick1 = new Audio();
            Kick1.src = 'https://instaud.io/_/3Oaj.wav';
            if (typeof Kick1.loop == 'boolean') {
                Kick1.loop = false;
            } else {
                Kick1.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            Kick1.play();
            break;
    }
});