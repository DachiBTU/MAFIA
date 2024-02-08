function toggleAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    const musicBTN = document.getElementById('musicBTN');
    musicBTN.textContent = 'II'; 
    if (audioPlayer.paused) {
        audioPlayer.play();
        musicBTN.textContent = 'II'; 
    } else {
        audioPlayer.pause();
        musicBTN.textContent = '▷';
    }
}
function getValue(){
    var  text = document.getElementById('name1');
    var txtValue = text.value;
}
function activeButton(selectedButton) {
    var buttons = selectedButton.parentNode.querySelectorAll('button');

    buttons.forEach(function(button) {
        button.style.backgroundColor = '#493e29';
    });

    selectedButton.style.backgroundColor = 'black';
}
var test = true;
function playerDied(selectedButton) {
    var buttons = selectedButton.parentNode.querySelectorAll('button');
    var inputFields = selectedButton.parentNode.querySelectorAll('input');
    if (test){
    test = false;
    buttons.forEach(function (button) {
        button.disabled = true;
        if (button === selectedButton) {
            button.textContent = '🤍';
            button.style.backgroundColor = 'green';
            button.disabled = false;
        }
    });
    inputFields.forEach(function (inputField) {
        inputField.disabled = true;
    });
}else{
    test = true;
    buttons.forEach(function (button) {
        button.disabled = false;
        if (button === selectedButton) {
            button.textContent = '❌';
            if (button.style.backgroundColor !== 'black') button.style.backgroundColor = '#493e29';
            button.disabled = false;
        }
    });
    inputFields.forEach(function (inputField) {
        inputField.disabled = false;
    });
}
}