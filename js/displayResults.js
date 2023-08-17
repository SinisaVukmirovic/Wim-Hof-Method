import { infoDisplay } from './DOMelements.js';

let roundResults = [];

// export default function displayResults() {
//     roundResults.forEach(res => {
//         let resPar = document.createElement('p');
//         resPar.innerHTML = `${res}`;
//         infoDisplay.append(resPar);
//     });
// }

export default function displayResults() {
    roundResults.forEach(res => {
        infoDisplay.innerHTML += `
            <p style="text-align:left">${res}</p>
        `;
    });
}

export { roundResults };