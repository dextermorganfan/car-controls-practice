const practiceButton = document.getElementById('practice');
const delay = document.getElementById('delay');

const path = './audios/';

const temp_array = [
   path + 'hazardlights.mp3',
   path + 'high_beams.mp3',
   path + 'low_beams.mp3',
   path + 'parking_brake.mp3',
   path + 'parking_lights.mp3',
   path + 'step_on_brakes.mp3',
   path + 'turningsignalleft.mp3',
   path + 'turningsignalright.mp3',
   path + 'turnthecaron.mp3',
   path + 'wipers_high.mp3',
   path + 'wipers_low.mp3',
]


function playRandomSound() {
   if (temp_array.length > 0) {
      const randomIndex = Math.floor(Math.random() * temp_array.length);
      const selectedAudio = temp_array.splice(randomIndex, 1)[0];
      const audio = new Audio(selectedAudio);
      audio.play();
      audio.onended = () => {
         setTimeout(playRandomSound, delay.value * 1000);
      };
  } else {
      console.log('All sounds have been played.');
  }
}

practiceButton.addEventListener('click', function() {
   playRandomSound();
})