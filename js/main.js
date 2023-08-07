import { 
    settingsForm, 
    startBtn, 
    stopBtn, 
    infoDisplay, 
    roundDisplay,
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

let round = 0;

function startApp() {
    round++;
    if (round > settingsValues.numberOfRounds) {
        infoDisplay.innerHTML = `Breathing session over!`;
        return;
    }
    roundDisplay.innerHTML = `Round ${round}`;

    let breathNumber = settingsValues.numberOfBreaths;

    infoDisplay.innerHTML = `Breaths left`;
    numbersDisplay.innerHTML = `${breathNumber}`;

    const intervalBreathsCounter = setInterval(() => {
        breathNumber--;
        numbersDisplay.innerHTML = `${breathNumber}`;

        if (breathNumber == 3) {
            infoDisplay.innerHTML = 'Final breath coming up!';
        }
        if (breathNumber == 1) {
            infoDisplay.innerHTML = 'Breath in deep and hold breath!';
        }

        if (breathNumber == 0) {
            clearInterval(intervalBreathsCounter);
            infoDisplay.innerHTML = 'Hold breath as long as you can!';
            numbersDisplay.innerHTML = ``;
            endRoundAndHoldBreath();
        };
    }, settingsValues.breathingPace * 300);
}

function endRoundAndHoldBreath() {
    // infoDisplay.innerHTML = 'Hold breath as long as you can!';
    let secondsCounter = 0;

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        numbersDisplay.innerHTML = `${secondsCounter}`;
    }, 300);

    stopBtn.addEventListener('click', () => {
        clearInterval(intervalSecondsCounter);
        infoDisplay.innerHTML = `Breath held for ${secondsCounter} seconds!`;
        numbersDisplay.innerHTML = `${secondsCounter}`;

        setTimeout(() => {
            recoveryTime();
        }, 2000);
    });
}

function recoveryTime() {
    let secondsCounter = settingsValues.recoveryTime;

    const intervalrecoveryTime = setInterval(() => {
        numbersDisplay.innerHTML = `${secondsCounter}`;
        secondsCounter--;
        infoDisplay.innerHTML = 'Pause! Recovery time.';

        if (secondsCounter == 3) {
            infoDisplay.innerHTML = 'Next round coming up!';
        }

        if (secondsCounter == 0) {
            clearInterval(intervalrecoveryTime);
            // infoDisplay.innerHTML = 'Next round starting!';
            numbersDisplay.innerHTML = ``;
            
            setTimeout(() => {
                // if (round > settingsValues.numberOfRounds) {
                    //     stopSessionDisplayResults();
                    //     return;
                    // }
                // numbersDisplay.innerHTML = ``;
                startApp();
            }, 1000);
        }
    }, 300);
}