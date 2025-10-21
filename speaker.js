const buttons = document.querySelectorAll('.word-button');


const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const word = button.getAttribute('data-word'); 
        
        synth.cancel(); 
        
        utterance.text = word;
        
        synth.speak(utterance);
    });
});