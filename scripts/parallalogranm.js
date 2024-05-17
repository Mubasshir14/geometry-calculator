// function calculateParallalogramArea(){
//     // const baseInput = document.getElementById('parallaloogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     const Base = getParallalogramBase();

// }

// function getParallalogramBase(){
//     const baseInput = document.getElementById('parallaloogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }
function calculateParallalogramArea() {
    const base = getInputByID('parallalogram-base');
    const height = getInputByID('parallalogram-height');

    const area = height * base;
    // const parallelogramArea = document.getElementById('parallalogram-area');
    // parallelogramArea.innerText = area;
    setInnerTextByID('parallalogram-area', area);
}

function getInputByID(inputID) {
    const inputField = document.getElementById(inputID);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue
}

function setInnerTextByID(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}
