// Import the updateColorPreview function
const updateColorPreview = require("../script");

// Mock the HTML elements
document.body.innerHTML = `
    <div id="color-preview"></div>
    <span id="red-value"></span>
    <span id="green-value"></span>
    <span id="blue-value"></span>
    <input type="range" id="red" value="128">
    <input type="range" id="green" value="64">
    <input type="range" id="blue" value="32">
`;

const colorPreview = document.getElementById("color-preview");
const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");

test("updateColorPreview function should update colorPreview div and shades", async () => {
  // Invoke the function

  setTimeout(() => {
    console.log("this is the second message");
    updateColorPreview();
    // Expectations
    expect(colorPreview.style.backgroundColor).toBe("rgb(128,64,32)");
    expect(redValue.textContent).toBe("128");
    expect(greenValue.textContent).toBe("64");
    expect(blueValue.textContent).toBe("32");

    // Check styles
    expect(redValue.style.color).toBe("rgb(128,0,0)");
    expect(greenValue.style.color).toBe("rgb(0,64,0)");
    expect(blueValue.style.color).toBe("rgb(0,0,32)");
  }, 3000);
});
