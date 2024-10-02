function startRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.start();

        recognition.onresult = function(event) {
            const speechResult = event.results[0][0].transcript.toLowerCase();
            document.querySelector('input[name="symptoms"]').value = speechResult;
            recognition.stop();
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error detected: ' + event.error);
            recognition.stop();
        };
    } else {
        alert('Your browser does not support speech recognition.');
    }
}
