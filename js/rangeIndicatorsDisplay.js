import { settingsForm } from "./DOMelements.js";

const formDivElems = Array.from(settingsForm.querySelectorAll('div'));

const indicatorSteps = [
    [20, 30, 40, 50],
    [2, 3, 4, 5, 6],
    [2, 3, 4, 5],
    [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
];
    
indicatorSteps.forEach((inds, i = 0) => {
    const indicators = document.createElement('ul');
    indicators.classList.add('indicators');
    
    inds.forEach(step => {
        const li = document.createElement('li')
        li.append(step);
        indicators.append(li);
    });
    formDivElems[i].append(indicators);
    i++;
});