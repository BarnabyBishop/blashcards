const Sound = require('react-native-sound');
let playing = false;

export default function(soundFile) {
    // Load the sound file  from the app bundle
    const sound = new Sound(soundFile, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Failed to load the sound', soundFile, error);
        } else {
            // loaded successfully, play the sound.
            sound.play();
        }
    });
}
