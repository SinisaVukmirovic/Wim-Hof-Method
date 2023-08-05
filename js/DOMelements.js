const settingsForm = document.querySelector('form');

const breathsNumberInput = settingsForm.querySelector('[data-breaths-number]');
const breathingPaceInput = settingsForm.querySelector('[data-breathing-pace]');
const roundsNumberInput = settingsForm.querySelector('[data-rounds-number]');
const recoveryTimeInput = settingsForm.querySelector('[data-recovery-time]');

const startBtn = document.querySelector('[data-start-btn]');

const breathNumberDisplay = document.querySelector('[data-breath-number]');

// const saveBtn = settingsForm.querySelector('button');

export { 
    settingsForm, 
    breathsNumberInput, 
    breathingPaceInput, 
    roundsNumberInput, 
    recoveryTimeInput, 
    startBtn,
    breathNumberDisplay
};