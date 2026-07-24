import quizData from "./quizData.js";
const quizApp = document.querySelector(".quiz-app");
const quizQuestion = document.querySelector('.quiz-question');
const quizOptionContainer = document.querySelector(".quiz-option-container");
const nextBtn = document.getElementById("next-btn");

let index = 0;

function createQuiz(){    
    quizOptionContainer.innerHTML = "";
    quizQuestion.textContent = quizData[index].question;
    quizData[index].options.forEach((option) => {
        let optionText = document.createElement('p');
        optionText.textContent = option;
        quizOptionContainer.appendChild(optionText);

       
    });
}

nextBtn.addEventListener("click", () => {
    index++;
    if(index > quizData.length){
        index = 0;
    }
    if(index < quizData.length){
        createQuiz();
    } 
});

window.addEventListener("DOMContentLoaded", () => {
    createQuiz();
})
