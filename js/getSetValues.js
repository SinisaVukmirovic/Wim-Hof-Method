import { settingsForm, 
    breathsNumberInput, 
    breathingPaceInput, 
    roundsNumberInput, 
    recoveryTimeInput } from './DOMelements.js';

export default function getSetValues() {
    const numberOfBreathsPerRound = Number(breathsNumberInput.value);
    const breathingPace = Number(breathingPaceInput.value);
    const numberOfRounds = Number(roundsNumberInput.value);
    const recoveryTimeBetweenRounds = Number(recoveryTimeInput.value);

    console.log(numberOfBreathsPerRound, breathingPace, numberOfRounds, recoveryTimeBetweenRounds);
}