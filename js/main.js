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

startBtn.addEventListener('click', startSession);

let roundNumber = 0;

function startSession() {
    roundNumber++;
    if (roundNumber > settingsValues.numberOfRounds) {
        return;
    }
    let counter = settingsValues.numberOfBreaths;
    console.log(counter);
    roundDisplay.textContent = `Round ${roundNumber}`;
    infoDisplay.textContent = '';

    const intervalBreathsCounter = setInterval(() => {
        counter--;
        console.log(counter);
        numbersDisplay.textContent = counter;


        if (counter == 0) {
            clearInterval(intervalBreathsCounter);
            numbersDisplay.textContent = '';

            breathHolding();
        }
    }, 333);
}



console.log('round', roundNumber)

function breathHolding() {
    let secondsCounter = 0;
    stopBtn.classList.add('show');
    const intervalSecindsCounter = setInterval(() => {
        secondsCounter++
        infoDisplay.textContent = secondsCounter;
    }, 333);

    stopBtn
}