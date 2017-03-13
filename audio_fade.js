/**
 * Audio fade in support
 */

audio = document.getElementById("myAudio");
audio.volume = 0.5; //half of original value
//0 = nothing
//0.5 = half of maximum
//1 = full volume.

// Initial volume of 0.20
// Make sure it's a multiple of 0.05
var vol = 0.20;
var interval = 200; // 200ms interval

var fadeout = setInterval(
  function() {
    // Reduce volume by 0.05 as long as it is above 0
    // This works as long as you start with a multiple of 0.05!
    if (vol > 0) {
      vol -= 0.05;
      audio.setVolume(vol);
    }
    else {
      // Stop the setInterval when 0 is reached
      clearInterval(fadeout);
    }
  }, interval);
