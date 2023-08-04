import { 
    breathsNumberInput, 
    breathingPaceInput, 
    roundsNumberInput, 
    recoveryTimeInput 
} from './DOMelements.js';

export { settingsValues };
let settingsValues = null;

function getSettingsValues() {
    settingsValues = {
        numberOfBreaths: Number(breathsNumberInput.value),
        breathingPace: Number(breathingPaceInput.value),
        numberOfRounds: Number(roundsNumberInput.value),
        recoveryTime: Number(recoveryTimeInput.value)
    }
}

export default getSettingsValues;