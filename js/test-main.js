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

let roundNumber = 0;

settingsForm.addEventListener('submit', e => {
    e.preventDefault();
    
    getSettingsValues();            
    console.log(settingsValues);
    console.log(settingsValues.numberOfRounds);
});

startBtn.addEventListener('click', startSession);


function startSession() {
    startBtn.style.display = 'none';

    roundNumber++;
    let breathNumber = settingsValues.numberOfBreaths;
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

            // setTimeout(() => {
            // breathHolding();
                // }, 1500);
                console.log(roundNumber, 'end of session');
                breathHolding();
        };

    }, settingsValues.breathingPace * 333);
}

function breathHolding() {
    stopBtn.classList.add('show');
    // infoDisplay.innerHTML = 'Hold breath as long as you can!';
    let secondsCounter = 0;

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        numbersDisplay.innerHTML = `${secondsCounter}`;

       

        // stopBtn.addEventListener('click', () => {
        stopBtn.addEventListener('click', testFunc);
            // function testFunc() {
            //     stopBtn.classList.remove('show');
    
                // clearInterval(intervalSecondsCounter);
                // startSession();
            //     console.log('end of breath hold')
            // }
        // })
        // if (secondsCounter == 10) {
            //     clearInterval(intervalSecondsCounter);
            //     startSession();
            // }
    }, 333);
    
    function testFunc() {
        stopBtn.classList.remove('show');
        stopBtn.removeEventListener('click', testFunc);
        console.log('rem ev lis')
    
        clearInterval(intervalSecondsCounter);
        startSession();
        console.log('end of breath hold')
    } 
    // stopBtn.addEventListener('click', () => {
    //     // clearInterval(intervalSecondsCounter);
        
    //     // infoDisplay.innerHTML = `Breath held for ${secondsCounter} seconds!`;
    //     infoDisplay.innerHTML = 'Breathe in deep and hold breath!'
    //     roundDisplay.innerHTML = `Round ${round}<br>Breath held for ${secondsCounter} seconds!`;
    //     numbersDisplay.innerHTML = `${secondsCounter}`;

    //     // console.log('before pushing in', round - 1, 'round results', results)
    //     // console.log('before pushing in', round, 'round results', results)
    //     // results.push(`Breath held in round ${round - 1}: ${secondsCounter}`);
        
    //     results.push(`Breath held in round ${round}: ${secondsCounter} seconds.`);

    //     // results.push(secondsCounter)
    //     // console.log('after pushing in', round - 1, 'round results', results)
    //     // console.log('after pushing in', round, 'round results', results)

    //     stopBtn.classList.remove('show');

    //     setTimeout(() => {
    //         retentionTime();
    //     }, 2000);
    // });
}