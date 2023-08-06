import { 
    settingsForm, 
    startBtn, 
    stopBtn, 
    infoDisplay, 
    breathNumberDisplay, 
    breathHeldDisplay 
} from './DOMelements.js';

import getSettingsValues, { settingsValues } from './getSettingsValue.js';

console.log(settingsValues);
        
getSettingsValues();
console.log(settingsValues);

settingsForm.addEventListener('submit', e => {
    e.preventDefault();
    
    getSettingsValues();            
    console.log(settingsValues)
});

startBtn.addEventListener('click', startApp);

function startApp() {
    let breathNumber = 0;
    infoDisplay.innerHTML = 'Number of Breaths';
    breathNumberDisplay.innerHTML = `${breathNumber}`;
    const intervalBreathsCounter = setInterval(() => {
        breathNumber++;
        breathNumberDisplay.innerHTML = `${breathNumber}`;

        if (breathNumber == 5) {
            clearInterval(intervalBreathsCounter);
            endRoundAndBreathIn();
        };
    }, (settingsValues.breathingPace) * 100);
}

function endRoundAndBreathIn() {
    let secondsCounter = 0;

    infoDisplay.innerHTML = 'Breath in and hold your breath!';

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        breathHeldDisplay.innerHTML = `${secondsCounter}`;
    }, 1000);

    stopBtn.addEventListener('click', () => {
        clearInterval(intervalSecondsCounter);
        breathHeldDisplay.innerHTML = `Breath held for ${secondsCounter} seconds!`;
    });
}