import './rangeIndicatorsDisplay.js';

import { 
    settingsForm, 
    startBtn, 
    stopBtn, 
    infoDisplay, 
    roundDisplay,
    numbersDisplay
} from './DOMelements.js';

import getSettingsValues, { settingsValues } from './getSettingsValue.js';

import displayResults, { roundResults } from './displayResults.js';
        
getSettingsValues();
console.log(settingsValues);

settingsForm.addEventListener('submit', e => {
    e.preventDefault();
    
    getSettingsValues();            
    console.log(settingsValues);
});

// let oneSec = 222;   //just for testing
let oneSec = 1000;
let round = 0;

startBtn.addEventListener('click', startNewRound);

function startNewRound() {
    round++;
    startBtn.style.display = 'none';
    roundDisplay.innerHTML = `Round ${round}`;

    let breathNumber = settingsValues.numberOfBreaths;

    infoDisplay.innerHTML = `Breaths left`;
    numbersDisplay.innerHTML = `${breathNumber}`;

    const intervalBreathsCounter = setInterval(() => {
        breathNumber--;
        numbersDisplay.innerHTML = `${breathNumber}`;

        if (breathNumber == 4) infoDisplay.innerHTML = 'Final breath coming up!';
        
        if (breathNumber == 2) infoDisplay.innerHTML = 'Breath in deep...';
        
        if (breathNumber == 1) infoDisplay.innerHTML = '...exhale...';
        
        if (breathNumber == 0) {
            clearInterval(intervalBreathsCounter);
            infoDisplay.innerHTML = '...and hold your breath';
            numbersDisplay.innerHTML = ``;

            breathHolding();
        };
    }, settingsValues.breathingPace * oneSec);
}

function breathHolding() {
    stopBtn.classList.add('show');
    infoDisplay.innerHTML = 'Hold breath as long as you can!';
    let secondsCounter = 0;

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        numbersDisplay.innerHTML = `${secondsCounter}`;
    }, oneSec);

    stopBtn.addEventListener('click', () => {
        clearInterval(intervalSecondsCounter);
        
        infoDisplay.innerHTML = 'Breathe in deep and hold breath!'
        roundDisplay.innerHTML = `Round ${round}<br>Breath held for ${secondsCounter} seconds!`;
        numbersDisplay.innerHTML = `${secondsCounter}`;

        roundResults.push(`Round ${round}: ${secondsCounter} <small>seconds</small>.`);

        stopBtn.classList.remove('show');

        setTimeout(() => {
            retentionTime();
        }, 2000);
    }, { once: true });
    // THIS ^^^ WAS THE BUG!!! FOR THIS APP TO WORK, EVENT LISTENER MUST HAVE OPTION ONCE!!!
}

function retentionTime() {
    let secondsCounter = 15;
    infoDisplay.innerHTML = 'Hold your breath';

    const retentionInterval = setInterval(() => {
        secondsCounter--;
        numbersDisplay.innerHTML = `${secondsCounter}`;

        if (secondsCounter == 1) {
            infoDisplay.innerHTML = 'Exhale and rest';
        }

        if (secondsCounter == 0) {
            clearInterval(retentionInterval);
            infoDisplay.innerHTML = '';
            numbersDisplay.innerHTML = ``;
    
            setTimeout(() => {
                recoveryTime();
            }, 1200);
        }
    }, oneSec);
}

function recoveryTime() {
    if (round == settingsValues.numberOfRounds) {
        roundDisplay.innerHTML = `Breathing session over!`;
        numbersDisplay.innerHTML = ``;
        
        displayResults();
        return;
    }

    let secondsCounter = settingsValues.recoveryTime;
    infoDisplay.innerHTML = 'Rest and recover';

    const intervalRecoveryTime = setInterval(() => {
        numbersDisplay.innerHTML = `${secondsCounter}`;
        secondsCounter--;

        if (secondsCounter == 2) {
            infoDisplay.innerHTML = 'Next round coming up!';
        }

        if (secondsCounter == 0) {
            clearInterval(intervalRecoveryTime);
            numbersDisplay.innerHTML = ``;
            
            setTimeout(() => {
                startNewRound();
            }, 1000);
        }
    }, oneSec);
}