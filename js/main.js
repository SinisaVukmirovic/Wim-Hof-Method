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

// console.log(settingsValues);
        
getSettingsValues();
// console.log(settingsValues);

settingsForm.addEventListener('submit', e => {
    e.preventDefault();
    
    getSettingsValues();            
    console.log(settingsValues)
});

startBtn.addEventListener('click', startApp);

let round = 1;

function startApp() {
    // if (round > settingsValues.numberOfRounds) {
    //     infoDisplay.innerHTML = `Breathing session over!`;
    //     return;
    // }
    startBtn.style.display = 'none';
    roundDisplay.innerHTML = `Round ${round}`;
    round++;

    let breathNumber = settingsValues.numberOfBreaths;

    infoDisplay.innerHTML = `Breaths left`;
    numbersDisplay.innerHTML = `${breathNumber}`;

    const intervalBreathsCounter = setInterval(() => {
        breathNumber--;
        numbersDisplay.innerHTML = `${breathNumber}`;

        if (breathNumber == 5) {
            infoDisplay.innerHTML = 'Final breath coming up!';
        }
        if (breathNumber == 3) {
            infoDisplay.innerHTML = 'Breath in deep...';
        }
        if (breathNumber == 2) {
            infoDisplay.innerHTML = '...exhale...';
        }
        if (breathNumber == 1) {
            infoDisplay.innerHTML = '...and hold your breath.';
        }

        if (breathNumber == 0) {
            clearInterval(intervalBreathsCounter);
            // infoDisplay.innerHTML = 'Hold breath as long as you can!';
            numbersDisplay.innerHTML = ``;
            endRoundAndHoldBreath();
        };
    }, settingsValues.breathingPace * 500);
}

function endRoundAndHoldBreath() {
    stopBtn.classList.add('show');
    infoDisplay.innerHTML = 'Hold breath as long as you can!';
    let secondsCounter = 0;

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        numbersDisplay.innerHTML = `${secondsCounter}`;
    }, 500);

    stopBtn.addEventListener('click', () => {
        clearInterval(intervalSecondsCounter);
        infoDisplay.innerHTML = `Breath held for ${secondsCounter} seconds!`;
        numbersDisplay.innerHTML = `${secondsCounter}`;
        stopBtn.classList.remove('show');

        // setTimeout(() => {
        //     recoveryTime();
        // }, 2000);
        setTimeout(() => {
            retentionTime();
        }, 2000);
    });
}

function retentionTime() {
    let secondsCounter = 15;
    infoDisplay.innerHTML = 'Breath in deep and hold breath!';
    const retentionInterval = setInterval(() => {
        secondsCounter--;
        numbersDisplay.innerHTML = `${secondsCounter}`;

        if (secondsCounter == 0) {
            clearInterval(retentionInterval);
            numbersDisplay.innerHTML = ``;
    
            setTimeout(() => {
                recoveryTime();
            }, 1000);
        }
    }, 500);

}

function recoveryTime() {
    if (round > settingsValues.numberOfRounds) {
        infoDisplay.innerHTML = `Breathing session over!`;
        numbersDisplay.innerHTML = ``;
        // TO DO
        // displayResults()
        // To DO
        return;
    }

    let secondsCounter = settingsValues.recoveryTime;
    infoDisplay.innerHTML = 'Pause! Recovery time.';

    const intervalrecoveryTime = setInterval(() => {
        numbersDisplay.innerHTML = `${secondsCounter}`;
        secondsCounter--;

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

                // if (round > settingsValues.numberOfRounds) {
                //     infoDisplay.innerHTML = `Breathing session over!`;
                //     return;
                // }

                startApp();
            }, 1000);
        }
    }, 500);
}