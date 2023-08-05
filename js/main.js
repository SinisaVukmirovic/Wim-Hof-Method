import { settingsForm, startBtn, breathNumberDisplay } from './DOMelements.js';
// import getSettingsValues from './getSettingsValue.js';
import getSettingsValues, { settingsValues } from './getSettingsValue.js';

console.log(settingsValues);
        
getSettingsValues();
console.log(settingsValues);

settingsForm.addEventListener('submit', e => {
    e.preventDefault();
    
    getSettingsValues();            
    console.log(settingsValues)
});

startBtn.addEventListener('click', startApp);

let breathNumber = 0;
breathNumberDisplay.innerHTML = `${breathNumber}`;

function startApp() {
    const intervalBreathsCounter = setInterval(() => {
        breathNumber++;
        breathNumberDisplay.innerHTML = `${breathNumber}`;

        if (breathNumber == 5) {
            clearInterval(intervalBreathsCounter);
        };
    }, (settingsValues.breathingPace) * 100);

}