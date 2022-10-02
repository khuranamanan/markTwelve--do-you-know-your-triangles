const inputAngles = document.querySelectorAll("#input-angle");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output-check");

function sumOfAngles(a, b, c){
    const sum = a + b + c;
    return sum;
}

function checkAngles(){
    sum = sumOfAngles(Number(inputAngles[0].value), Number(inputAngles[1].value), Number(inputAngles[2].value));
    if (sum === 180) {
        output.innerText = "Yay! It is a Triangle.";
    } else{
        output.innerText = "Sorry! It is not a Triangle.";

    }
}

btnCheck.addEventListener("click", checkAngles);