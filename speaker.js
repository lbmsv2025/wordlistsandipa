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
function speakSound(sound) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(sound);

  utterance.lang = "en-US";
  utterance.rate = 0.8; // slower for learners

  synth.speak(utterance);
}
function speakSound(sound) {
  const examples = {
    p: "pronunciation",
    b: "bury",
    t: "trigonometry",
    d: "depot",
    k: "coefficient",
    g: "gaseous",
    f: "phrase",
    v: "vacation",
    θ: "theta",
    ð: "these",
    s: "secant",
    z: "zoology",
    ʃ: "showcase",
    ʒ: "measure",
    tʃ: "chairman",
    dʒ: "jealous",
    m: "metabolism",
    n: "nuisance",
    ŋ: "singing",
    l: "longitudinal",
    r: "rapport",
    j: "yellow",
h: "hippopotamus",
    w: "Wednesday"
  };

  const utterance = new SpeechSynthesisUtterance(examples[sound] || sound);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
const synth = window.speechSynthesis;
let currentLang = "en-US";

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLang;
  utterance.rate = 0.9;
  utterance.pitch = 1;

  synth.cancel();
  synth.speak(utterance);
}

// IPA sound examples (important!)
function speakSound(symbol) {
  const sounds = {
    "iː": "eeeee",
    "ɪ": "ih",
    "æ": "a",
    "ʌ": "uh",
    "ɑː": "ah",
    "ɔː": "aw",
    "uː": "oo",
    "ʊ": "oo",
    "eɪ": "ay",
    "aɪ": "eye",
    "ɔɪ": "oy",
    "aʊ": "ow",
    "θ": "think",
    "ð": "this",
    "ʃ": "sh",
    "ʒ": "measure",
    "tʃ": "ch",
    "dʒ": "j"
  };

  speak(sounds[symbol] || symbol);
}
  speechSynthesis.speak(utterance);
}

