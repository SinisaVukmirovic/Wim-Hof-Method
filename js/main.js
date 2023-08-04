import { settingsForm } from './DOMelements.js';
import getSettingsValues from './getSettingsValue.js';
import { settingsValues } from './getSettingsValue.js';


console.log(settingsValues);

// function getSettingsValues() {
    //     settingsValues = {
        //         numberOfBreaths: Number(breathsNumberInput.value),
        //         breathingPace: Number(breathingPaceInput.value),
        //         numberOfRounds: Number(roundsNumberInput.value),
        //         recoveryTime: Number(recoveryTimeInput.value)
        //     }
        // }
        
        getSettingsValues();
        console.log(settingsValues);
        
        settingsForm.addEventListener('submit', e => {
            e.preventDefault();
            
            getSettingsValues();            
            console.log(settingsValues)
        });
        


// console.log(numberOfBreathsPerRound, recoveryTimeBetweenRounds)

// getSettingsValues();
