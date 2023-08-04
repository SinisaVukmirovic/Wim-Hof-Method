const settingsForm = document.querySelector('form');

const breathsNumberInput = settingsForm.querySelector('[data-breaths-number]');
const breathingPaceInput = settingsForm.querySelector('[data-breathing-pace]');
const roundsNumberInput = settingsForm.querySelector('[data-rounds-number]');
const recoveryTimeInput = settingsForm.querySelector('[data-recovery-time]');
// const saveBtn = settingsForm.querySelector('button');


settingsForm.addEventListener('submit', e => {
    e.preventDefault();

    const numberOfBreathsPerRound = breathsNumberInput.value;
    const breathingPace = breathingPaceInput.value;
    const numberOfRounds = roundsNumberInput.value;
    const recoveryTimeBetweenRounds = recoveryTimeInput.value;
    
    console.log(numberOfBreathsPerRound, recoveryTimeBetweenRounds)
});