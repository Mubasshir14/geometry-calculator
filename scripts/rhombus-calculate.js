function calculateRhombusArea(){
    const d1 = getInput('rhombus-digonal1');
    const d2 = getInput('rhombus-digonal2');

    const AreaRhombus = 0.5 * d1 * d2;
    areaFunction('rhombus-area', AreaRhombus);
}

function getInput(sentelementId){
    const getTheID = document.getElementById(sentelementId);
    const getTheIDText = getTheID.value;
    const getValue = parseFloat(getTheIDText);
    return getValue;
}

function areaFunction(getTheIDname, r){
    const a = document.getElementById(getTheIDname);
    a.innerText = r;

    const ros = document.getElementById('t-4');
    ros.value = r;
}