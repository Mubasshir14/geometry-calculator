function calculateEllipseArea(){
    const r1 = ellipseInput('ellipse-mjaor-axis');
    const r2 = ellipseInput('ellipse-minor-axis')

    const EllipseArea = 3.1416 * r1 * r2;
    putArea('ellipse-area', EllipseArea);
}

function ellipseInput(sentID){
    const gettheIDpath = document.getElementById(sentID);
    const gettheIDpathText = gettheIDpath.value;
    const getthepathValue = parseFloat(gettheIDpathText);
    return getthepathValue;
}

function putArea(elementIdofArea, e){
    const p = document.getElementById(elementIdofArea);
    p.innerText = e;

    const ell = document.getElementById('t-6');
    ell.value = e;
}