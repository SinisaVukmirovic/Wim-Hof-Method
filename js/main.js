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

import displayResults, { results } from './displayResults.js';
        
getSettingsValues();
console.log(settingsValues);

settingsForm.addEventListener('submit', e => {
    e.preventDefault();
    
    getSettingsValues();            
    console.log(settingsValues);
});

let round = 0;
// let results = [];
// console.log('initialization of results', results)

startBtn.addEventListener('click', startSession);

function startSession() {
    startBtn.style.display = 'none';
    ++round;
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
            infoDisplay.innerHTML = '...and hold your breath.';
            numbersDisplay.innerHTML = ``;

            setTimeout(() => {
                breathHolding();
            }, 1500);
        };
    }, settingsValues.breathingPace * 300);
}

function breathHolding() {
    stopBtn.classList.add('show');
    infoDisplay.innerHTML = 'Hold breath as long as you can!';
    let secondsCounter = 1;

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        numbersDisplay.innerHTML = `${secondsCounter}`;
    }, 300);

    stopBtn.addEventListener('click', () => {
        clearInterval(intervalSecondsCounter);
        
        // infoDisplay.innerHTML = `Breath held for ${secondsCounter} seconds!`;
        roundDisplay.innerHTML = `Round ${round}<br>Breath held for ${secondsCounter} seconds!`;

        // console.log('before pushing in', round - 1, 'round results', results)
        // console.log('before pushing in', round, 'round results', results)
        // results.push(`Breath held in round ${round - 1}: ${secondsCounter}`);
        
        results.push(`Breath held in round ${round}: ${secondsCounter} seconds.`);

        // results.push(secondsCounter)
        // console.log('after pushing in', round - 1, 'round results', results)
        // console.log('after pushing in', round, 'round results', results)

        numbersDisplay.innerHTML = `${secondsCounter}`;
        stopBtn.classList.remove('show');

        setTimeout(() => {
            retentionTime();
        }, 1500);
    });
}

function retentionTime() {
    let secondsCounter = 15;
    infoDisplay.innerHTML = 'Take a deep breath and hold!';
    const retentionInterval = setInterval(() => {
        secondsCounter--;
        numbersDisplay.innerHTML = `${secondsCounter}`;

        if (secondsCounter == 1) {
            infoDisplay.innerHTML = 'Exhale and rest for a while!';
        }

        if (secondsCounter == 0) {
            clearInterval(retentionInterval);
            infoDisplay.innerHTML = '';
            numbersDisplay.innerHTML = ``;
    
            setTimeout(() => {
                recoveryTime();
            }, 500);
        }
    }, 300);
}

function recoveryTime() {
    if (round == settingsValues.numberOfRounds) {
        roundDisplay.innerHTML = `Breathing session over!`;
        numbersDisplay.innerHTML = ``;
        // TO DO \\\\\\\\\
        displayResults();
        // To DO /////////
        return;
    }

    let secondsCounter = settingsValues.recoveryTime;
    infoDisplay.innerHTML = 'Pause to Recover';

    const intervalrecoveryTime = setInterval(() => {
        numbersDisplay.innerHTML = `${secondsCounter}`;
        secondsCounter--;

        if (secondsCounter == 2) {
            infoDisplay.innerHTML = 'Next round coming up!';
        }

        if (secondsCounter == 0) {
            clearInterval(intervalrecoveryTime);
            numbersDisplay.innerHTML = ``;
            
            setTimeout(() => {
                startSession();
            }, 500);
        }
    }, 300);
}