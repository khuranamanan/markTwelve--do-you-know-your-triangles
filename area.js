const sides = document.querySelectorAll(".input-side")
const btnCalculate = document.querySelector("#btn-calculate")
const output = document.querySelector("#output-calculate");

function bxh(a, b){
    const basexheight = a*b;
    return basexheight;
}

function calculateArea(){
    const area = bxh(Number(sides[0].value), Number(sides[1].value))/2;
    output.innerText = `The area of this Triangle is ${area} unit²`
}

btnCalculate.addEventListener("click", calculateArea)