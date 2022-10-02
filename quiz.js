const quizForm = document.querySelector("#quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const output = document.querySelector("#output-answers");

const correctAnswers = ["Right", "Acute", "Equilateral", "2 congruent sides", "180 degrees", "Scalene", "1/2 x bh", "a + b + c", "45°", "Hypotenuse"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formData = new FormData(quizForm);
    for (let i of formData.values()){
        if (correctAnswers[index] === i){
            score++;
        }
        index++;
    }
    output.innerText = `Your score is ${score}.`;
}

btnSubmit.addEventListener("click", calculateScore);