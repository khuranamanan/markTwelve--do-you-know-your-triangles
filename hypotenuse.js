const inputA = document.querySelector("#input-a");
const inputB = document.querySelector("#input-b");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output-box");

function calculateSumOfSquare(a, b) {
    const sumOfSquares = a ** 2 + b ** 2;
    return sumOfSquares;
}

function calculateHypotenuse() {
    sumOfSquares = calculateSumOfSquare(Number(inputA.value), Number(inputB.value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = `The length of hypotenuse is ${lengthOfHypotenuse} cm`;
}

btnCalculate.addEventListener("click", calculateHypotenuse);