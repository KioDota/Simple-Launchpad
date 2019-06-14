



  $(document).ready(function(){
    
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

          case 68: //keyCode for D
          var Snare1 = new Audio();
          Snare1.src = 'https://instaud.io/_/3Oal.wav';
          if (typeof Snare1.loop == 'boolean') {
              Snare1.loop = false;
          } else {
              Snare1.addEventListener('ended', function () {
                  this.currentTime = 0;
                  this.play();
              }, false);
          }
          Snare1.play();
          break;

          case 79: //keyCode for O
          var HiHat1 = new Audio();
          HiHat1.src = 'https://instaud.io/_/3OaS.wav';
          if (typeof HiHat1.loop == 'boolean') {
              HiHat1.loop = false;
          } else {
              HiHat1.addEventListener('ended', function () {
                  this.currentTime = 0;
                  this.play();
              }, false);
          }
          HiHat1.play();
          break;}
  });


}
