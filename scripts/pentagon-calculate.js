function pentagonAreaCalculate(){
    const perimeter = getInputByID('pentagon-perimeter');
    const apothem = getInputByID('pentagon-apothem');

    const Area = 0.5 * perimeter * apothem;
    setInnerID('pentagon-area', Area);
}

function getInputByID(inputID){
    const elementID = document.getElementById(inputID);
    const elementText = elementID.value;
    const element = parseFloat(elementText);
    return element;
}

function setInnerID(sentElementID, calculate){
    const getId = document.getElementById(sentElementID);
    getId.innerText = calculate;

    const penta = document.getElementById('t-5');
    penta.value = calculate;
}