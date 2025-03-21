// get speech synthesis object
let speech = new SpeechSynthesisUtterance();

// get voices initial it at empty array
let voices = [];
let voicesSelect = document.querySelector("select"); //get from select

// get voices from speech synthesis
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

// display voices list
    voices.forEach(voice => {
        let option = document.createElement("option");
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voicesSelect.appendChild(option);
    });
}

// voice changed event
voicesSelect.addEventListener("change", () => {
    speech.voice = voices.find(voice => voice.name === voicesSelect.value);
});


// burron click event
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});