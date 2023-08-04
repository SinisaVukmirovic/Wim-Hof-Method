// import { settingsForm, 
//     breathsNumberInput, 
//     breathingPaceInput, 
//     roundsNumberInput, 
//     recoveryTimeInput } from './DOMelements.js';

import { settingsForm } from './DOMelements.js';

import getSetValues from './getSetValues.js';

// const settingsForm = document.querySelector('form');

// const breathsNumberInput = settingsForm.querySelector('[data-breaths-number]');
// const breathingPaceInput = settingsForm.querySelector('[data-breathing-pace]');
// const roundsNumberInput = settingsForm.querySelector('[data-rounds-number]');
// const recoveryTimeInput = settingsForm.querySelector('[data-recovery-time]');
// const saveBtn = settingsForm.querySelector('button');

settingsForm.addEventListener('submit', e => {
    e.preventDefault();

    getSetValues();

    // const numberOfBreathsPerRound = Number(breathsNumberInput.value);
    // const breathingPace = Number(breathingPaceInput.value);
    // const numberOfRounds = Number(roundsNumberInput.value);
    // const recoveryTimeBetweenRounds = Number(recoveryTimeInput.value);
    
});

// console.log(numberOfBreathsPerRound, recoveryTimeBetweenRounds)