$(document).ready(function(){

  var sounds = []; //Array

  sounds["65"] = 'https://instaud.io/_/3Oaj.wav';
  sounds["68"] = 'https://instaud.io/_/3Oal.wav';
  sounds["79"] = 'https://instaud.io/_/3OaS.wav';



  document.addEventListener('keydown', function (evt) {
  console.log(evt.keyCode);




    var Sound = new Audio();
    //Sound.loop = true;
    Sound.src = sounds[evt.keyCode];
    Sound.play();



    animateLabel(evt.keyCode, Sound);

});

});




function animateLabel(key, Sound){


  var Animations = [ 'jackInTheBox', 'bounce', 'flash', 'pulse', 'rubberBand',  'swing', 'tada', 'bounceIn' ];

  console.log(Sound.ended)
  //Animate Label
  const element =  document.querySelector('#key'+ key.toString())
  var randInt =  Math.floor(Math.random() * Math.floor(Animations.length))
  element.classList.add('animated', Animations[randInt] )
  console.log(Animations[randInt])
  element.classList.add('animated', 'faster')

  element.addEventListener('animationend', function() { // animationend = Wenn Animation vorbei

    element.classList.remove('animated', Animations[randInt]);      // Klasse für Animation entfernen

  })



}


//Slider range functions
/*
var minVolume = 0;
var maxVolume = 10;
valueVolume = 6;


$( function() {
	$( "#slider-Volume" ).slider({
		range: "max",
		min: min,
		max: max,
		value: valueVolume,
		slide: function( event, ui ) {
			$( "#label-Volume" ).val( ui.value );
		}
	});
	$( "#label-Volume" ).val( $( "#slider-Volume" ).slider( "value" ) );
} );
*/
