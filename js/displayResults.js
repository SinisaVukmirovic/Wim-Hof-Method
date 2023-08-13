import { infoDisplay } from './DOMelements.js';

let results = [];

export default function displayResults() {
    results.forEach(res => {
        let resPar = document.createElement('p');
        resPar.innerHTML = `${res}`;
        infoDisplay.append(resPar);
    });
}

export { results };