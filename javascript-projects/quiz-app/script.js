import quizData from "./quizData.js";
const quizApp = document.querySelector(".quiz-app");
const quizQuestion = document.querySelector(".quiz-question");
const quizOptionContainer = document.querySelector(".quiz-option-container");
const nextButton = document.querySelector("#next-btn");
const playAgainButton = document.querySelector(".play-again-button");


let index = 0;
let userScore = 0;
playAgainButton.style.display = "none";
function createQuiz(){
    nextButton.disabled = true;
    quizOptionContainer.innerHTML = "";
    quizQuestion.textContent =`${quizData[index].id}. ${quizData[index].question}` ;
    quizData[index].options.forEach((optionText) => {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = optionText;
        quizOptionContainer.appendChild(button);

        button.addEventListener("click",(e) => {
            if(e.target.textContent ==  quizData[index].answer){
                userScore++;
                button.classList.add("correct");
                let buttons = document.querySelectorAll(".btn");
                buttons.forEach((btn) => {
                    btn.disabled = true;
                })
            }
            else{
                button.classList.add('wrong');
                let buttons = document.querySelectorAll(".btn");
                buttons.forEach((btn) => {
                    btn.disabled = true;
                })
            } 
            nextButton.disabled = false;

        });
    })

}

nextButton.addEventListener("click",() =>{
    index++;
    if(index < quizData.length){
        createQuiz();
    }
    else{
        index = 0;
        quizOptionContainer.innerHTML = "";
        nextButton.style.display ="none";
        playAgainButton.style.display= "block";
        showScore(userScore);
    }
})

function showScore(score){
    quizQuestion.textContent = `Your Score is ${score}`;
}

playAgainButton.addEventListener("click",() => {
    playAgainButton.style.display = "none";
    createQuiz();
})
window.addEventListener("DOMContentLoaded",() => {
    createQuiz();
})