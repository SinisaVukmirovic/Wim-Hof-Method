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

function startSession() {
    let counter = settingsValues.numberOfBreaths;
    console.log(counter);

    const intervalBreathsCounter = setInterval(() => {
        counter--;
        console.log(counter);
        numbersDisplay.textContent = counter;


        if (counter == 0) {
            clearInterval(intervalBreathsCounter);
            numbersDisplay.textContent = '';
        }
    }, 333);
}