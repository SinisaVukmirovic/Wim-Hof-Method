import { 
    breathsNumberInput, 
    breathingPaceInput, 
    roundsNumberInput, 
    recoveryTimeInput 
} from './DOMelements.js';

let settingsValues = {
    numberOfBreaths: null,
    breathingPace: null,
    numberOfRounds: null,
    recoveryTime: null
};

function getSettingsValues() {
    settingsValues = {
        numberOfBreaths: Number(breathsNumberInput.value),
        breathingPace: Number(breathingPaceInput.value),
        numberOfRounds: Number(roundsNumberInput.value),
        recoveryTime: Number(recoveryTimeInput.value)
    }
}

export { settingsValues };
export default getSettingsValues;