import { 
    settingsForm, 
    startBtn, 
    stopBtn, 
    infoDisplay, 
    numbersDisplay
    // breathNumberDisplay, 
    // breathHeldDisplay 
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

let round = 1; 

function startApp() {
    let breathNumber = settingsValues.numberOfBreaths;
    infoDisplay.innerHTML = `Breaths left in round ${round}`;
    numbersDisplay.innerHTML = `${breathNumber}`;

    const intervalBreathsCounter = setInterval(() => {
        breathNumber--;
        numbersDisplay.innerHTML = `${breathNumber}`;

        if (breathNumber == 3) {
            infoDisplay.innerHTML = 'Breath in deep and hold breath!';
        }

        if (breathNumber == 0) {
            clearInterval(intervalBreathsCounter);
            endRoundAndHoldBreath();
        };
    }, (settingsValues.breathingPace) * 100);
}

function endRoundAndHoldBreath() {
    infoDisplay.innerHTML = 'Hold breath as long as you can!';
    let secondsCounter = 0;

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        numbersDisplay.innerHTML = `${secondsCounter}`;
    }, 1000);

    stopBtn.addEventListener('click', () => {
        clearInterval(intervalSecondsCounter);
        infoDisplay.innerHTML = `Breath held for ${secondsCounter} seconds!`;

        recoveryTime();
    });
}

function recoveryTime() {
    let secondsCounter = 0;

    const intervalrecoveryTime = setInterval(() => {
        secondsCounter++;
        infoDisplay.innerHTML = 'Pause. Recovery time.'
        numbersDisplay.innerHTML = `${secondsCounter}`;

        if (settingsValues.recoveryTime == secondsCounter + 3) {
            clearInterval(intervalrecoveryTime);
            infoDisplay.innerHTML = 'Next round starting!'
            setTimeout(() => {
                // if (round > settingsValues.numberOfRounds) {
                //     stopSessionDisplayResults();
                //     return;
                // }
                numbersDisplay.innerHTML = ``;
                startApp();
            }, 100);
        }
    }, 1000);
}