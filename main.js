const voiceList = document.getElementById("voiceList");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

const syn = window.speechSynthesis;
let voices = [];

const getVoice = () => {
	voices = syn.getVoices();
	voiceList.innerHTML = "";
	voices.forEach((voice) => {
		let option = document.createElement("option");
		option.textContent = voice.name;
		option.setAttribute("data-lang", voice.lang);
		option.setAttribute("data-name", voice.name);
		voiceList.appendChild(option);
	});

	voiceList.selectedIndex = 6;
};

getVoice();

if (speechSynthesis !== undefined) {
	speechSynthesis.onvoiceschanged = getVoice;
}

btn.addEventListener("click", () => {
	if (text.value == "") {
		alert("Enter Some Text");
	} else {
		let toSpeak = new SpeechSynthesisUtterance(text.value);
		let selectVoiceName = voiceList.selectedOptions[0].getAttribute("data-name");
		voices.forEach((voice) => {
			if (voice.name == selectVoiceName) {
				toSpeak.voice = voice;
			}
        });
        syn.speak(toSpeak);
	}
});
