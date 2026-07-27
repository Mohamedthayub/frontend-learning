import quizData from "./quizData.js";
const quizApp = document.querySelector(".quiz-app");
const quizQuestion = document.querySelector('.quiz-question');
const quizOptionContainer = document.querySelector(".quiz-option-container");
const nextBtn = document.getElementById("next-btn");
const showUserScore = document.querySelector("#user-score");
const playAgainButton = document.querySelector(".play-again-button");

let index = 0;
let userScore = 0;
showUserScore.style.display = "none";
playAgainButton.style.display = "none";

function showScore(score){
    quizApp.innerHTML = "";
    nextBtn.style.display = "none";
    showUserScore.style.display = "block";
    showUserScore.textContent = `your score is ${score}`;
    
}

function createQuiz(){    
    quizOptionContainer.innerHTML = "";
    quizQuestion.textContent = ` ${quizData[index].id}. ${quizData[index].question}`
    quizData[index].options.forEach((option) => {
        let optionText = document.createElement('button');
        optionText.classList.add("option");
        optionText.textContent = option;
        optionText.addEventListener("click",(e) => {
            if(e.target.textContent ===  quizData[index].answer){
                userScore++;
                optionText.classList.add("correct");
                optionText.disabled = true;
                console.log(userScore);
            }
            else{
                optionText.classList.add('wrong');
            }
        })
        quizOptionContainer.appendChild(optionText);

    });
}

nextBtn.addEventListener("click", () => {
    index++;
    if(index >= quizData.length){
        // index = 0;
        quizApp.innerHTML = "";
        playAgainButton.style.display = "block"
        showScore(userScore);
        index = 0;
    
    }
    if(index < quizData.length){
        createQuiz();
    } 
});

playAgainButton.addEventListener("click",() => {
    playAgainButton.style.display = "none";
    index = 0;
    userScore = 0;
    showUserScore.style.display = "none";
    createQuiz();

})
createQuiz();