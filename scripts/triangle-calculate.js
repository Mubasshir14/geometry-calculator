function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText);
    console.log(triangleBase);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);
    console.log(triangleHeight);

    const area = 0.5 * triangleBase * triangleHeight;
    // console.log(area);
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}