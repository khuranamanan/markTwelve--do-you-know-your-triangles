const inputA = document.querySelector("#input-a");
const inputB = document.querySelector("#input-b");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output-box");

function calculateSumOfSquare(a, b) {
    const sumOfSquares = a ** 2 + b ** 2;
    return sumOfSquares;
}

function calculateHypotenuse() {
    var value1 = Number(inputA.value);
    var value2 = Number(inputB.value);

    if (value1 > 0 && value2 > 0) {
        sumOfSquares = calculateSumOfSquare(value1, value2);
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        output.innerText = `The length of hypotenuse is ${lengthOfHypotenuse} cm`;
    } else {
        output.innerText = "The entered value should be greater than 0";
    }

}

btnCalculate.addEventListener("click", calculateHypotenuse);