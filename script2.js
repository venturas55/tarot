 //listen to shake event
 var shakeEvent = new Shake({threshold: 15});
 shakeEvent.start();
 window.addEventListener('shake', function(){
     alert("Shaked");
 }, false);

 //stop listening
 function stopShake(){
     shakeEvent.stop();
 }

 //check if shake is supported or not.
 if(!("ondevicemotion" in window)){alert("Not Supported");}



 window.onload = function() {
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15
    });
    // start listening to device motion
    myShakeEvent.start();
    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);
    //shake event callback
    function shakeEventDidOccur () {
        //put your own code here etc.
      
        alert('Shake!');
    }
    $('span').bind( "touchstart", function(e){add();} );


};

