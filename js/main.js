import './rangeIndicatorsDisplay.js';

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

let round = 0;
// let round = 1;
let results = [];
console.log('initialization of results', results)

startBtn.addEventListener('click', startApp);


function startApp() {
    // if (round > settingsValues.numberOfRounds) {
    //     infoDisplay.innerHTML = `Breathing session over!`;
    //     return;
    // }
    ++round;
    startBtn.style.display = 'none';
    roundDisplay.innerHTML = `Round ${round}`;
    // round++;

    let breathNumber = settingsValues.numberOfBreaths;

    infoDisplay.innerHTML = `Breaths left`;
    numbersDisplay.innerHTML = `${breathNumber}`;

    const intervalBreathsCounter = setInterval(() => {
        breathNumber--;
        numbersDisplay.innerHTML = `${breathNumber}`;

        if (breathNumber == 4) {
            infoDisplay.innerHTML = 'Final breath coming up!';
        }
        if (breathNumber == 2) {
            infoDisplay.innerHTML = 'Breath in deep...';
        }
        if (breathNumber == 1) {
            infoDisplay.innerHTML = '...exhale...';
        }
        // if (breathNumber == 0) {
            // infoDisplay.innerHTML = '...and hold your breath.';
        // }

        if (breathNumber == 0) {
            clearInterval(intervalBreathsCounter);
            infoDisplay.innerHTML = '...and hold your breath.';
            // infoDisplay.innerHTML = 'Hold breath as long as you can!';
            numbersDisplay.innerHTML = ``;

            setTimeout(() => {
                breathHolding();
            }, 1500);
        };
    }, settingsValues.breathingPace * 300);
    // round++;
}

function breathHolding() {
    stopBtn.classList.add('show');
    infoDisplay.innerHTML = 'Hold breath as long as you can!';
    let secondsCounter = 0;

    const intervalSecondsCounter = setInterval(() => {
        secondsCounter++;
        numbersDisplay.innerHTML = `${secondsCounter}`;
    }, 300);

    stopBtn.addEventListener('click', () => {
        clearInterval(intervalSecondsCounter);
        
        infoDisplay.innerHTML = `Breath held for ${secondsCounter} seconds!`;
        // console.log('before pushing in', round - 1, 'round results', results)
        console.log('before pushing in', round, 'round results', results)
        // results.push(`Breath held in round ${round - 1}: ${secondsCounter}`);
        results.push(`Breath held in round ${round}: ${secondsCounter}`);
        // results.push(secondsCounter)
        // console.log('after pushing in', round - 1, 'round results', results)
        console.log('after pushing in', round, 'round results', results)

        numbersDisplay.innerHTML = `${secondsCounter}`;
        stopBtn.classList.remove('show');

        // results.push(secondsCounter);


        // setTimeout(() => {
        //     recoveryTime();
        // }, 2000);
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

        // TO DO
        displayResults();
        // To DO
        return;
    }

    let secondsCounter = settingsValues.recoveryTime;
    infoDisplay.innerHTML = 'Pause and Recover';

    const intervalrecoveryTime = setInterval(() => {
        numbersDisplay.innerHTML = `${secondsCounter}`;
        secondsCounter--;

        if (secondsCounter == 2) {
            infoDisplay.innerHTML = 'Next round coming up!';
        }

        if (secondsCounter == 0) {
            clearInterval(intervalrecoveryTime);
            numbersDisplay.innerHTML = ``;
            // round++;
            
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
            }, 1500);
        }
    }, 300);
}

function displayResults() {
    // results.splice(1, 1)
    results.forEach(res => {
        let resPar = document.createElement('p');
        resPar.innerHTML = `${res}`
        infoDisplay.append(resPar)
    });
}

// function populateIndicators() {
//     const indicatorsValues = [20, 30, 40, 50];
//     const ulElem = document.createElement('ul');
//     indicatorsValues.forEach(ind => {
//         const liElem = document.createElement('li');
//         liElem.innerHTML = ind;
//         ulElem.classList.add('indicators');
//         ulElem.append(liElem);
//         document.querySelector('.settings form div').append(ulElem);
//     })
// }
// populateIndicators()










