function playInstrument(instrument){
    console.log('probando')
    let audioSound = document.createElement('audio');
    audioSound.src = instrument
    audioSound.play()
}