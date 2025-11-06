const prompt = require("prompt-sync")();

let heightInput = Number(prompt("Input your height(cm): "));

let modHeight = heightInput % 100;

if (isNaN(heightInput) || heightInput <= 0) {
  console.log("Please enter a positive number greater than 0");
}

let idealWeight = (modHeight * 9) / 10;
let maxWeight = modHeight;
let minWeight = (modHeight * 8) / 10;

console.log(
  "With",
  heightInput,
  "cm, your ideal, max and min weight sequentially are:",
  idealWeight,
  "kg",
  maxWeight,
  "kg",
  minWeight,
  "kg"
);
