
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');
const colorPreview = document.getElementById('color-preview');


function updateColorPreview() {
  
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const color = `rgb(${red},${green},${blue})`;
    const redShade = `rgb(${red},0,0)`;
    const greenShade = `rgb(0,${green},0)`;
    const blueShade = `rgb(0,0,${blue})`;
 

    colorPreview.style.backgroundColor = color;
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
    redValue.style.color = redShade;
    greenValue.style.color = greenShade;
    blueValue.style.color = blueShade;

}

window.addEventListener("DOMContentLoaded", () => {
    
    if (redSlider) {
        console.log('loaded');
        redSlider.addEventListener('input', updateColorPreview);
    }
    if (greenSlider) {
        console.log('green');
        greenSlider.addEventListener('input', updateColorPreview);
    }
    if (blueSlider) {
        console.log('blue');
        blueSlider.addEventListener('input', updateColorPreview);
    }
});


