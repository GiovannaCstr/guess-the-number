const showResult = document.getElementById("divResult");
const attempts = document.getElementById("showAttempts");
const tryIt = document.getElementById("btnTry");


function generateNumber() {
    return Math.floor(Math.random() * (100 + 1) + 1);
}

let answer = generateNumber();
let counter = 0; 

tryIt.addEventListener("click", function() {
    const number = parseInt(document.getElementById("inptNumber").value);
    compareTheAnswer(number);
    showAttempts(number);

    document.getElementById("inptNumber").value = "";
})

function showAttempts(number) {
    if (isNaN(number)) {
        attempts.innerHTML = `<p>Type a number to play</p>`;
    } else if (number === 0 || number === "") {
        attempts.innerHTML = `<p>Invalid number!</p>`;
    } else {
        counter++;
        attempts.innerHTML = `<p>Number of attempts: ${counter}</p>`;
    }
}

function compareTheAnswer(number) {
    if(number === answer){
        showResult.innerHTML= `
        <p>ACERTOU</p>
        `;
    } else if (number > answer){
        showResult.innerHTML= `
        <p>Too High</p>
        `;
    } else if (number < answer){
        showResult.innerHTML= `
        <p>Too Low</p>
        `;
    }
}


