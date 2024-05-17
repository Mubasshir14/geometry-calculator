function calculateRectangleArea(){
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);


    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);

    const area = rectangleLength * rectangleWidth;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}