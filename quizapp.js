const questionContainer=document.getElementById("question-container")
const questionElement=document.getElementById("question")
const answerButtons=document.getElementById("answer-buttons")
const next=document.getElementById("next-btn")
const restart=document.getElementById("restart-btn")
const resultDiv=document.getElementById("result")

let shuffledQuestions,currentQuestionIndex,score;

const questions=[
    {
        question:"Which of the following actors starred in the 1992 movie Unforgiven?",
        answer:[
            {text:"Harrison Ford", correct:false},
            {text:"Sylvester Stallone", correct:false},
            {text:"Clint Eastwood", correct:true},
            {text:"Mel Gibson", correct:false}
        ]
    },
    {
        question:"Who won the academy in the year 2017?",
        answer:[
            {text:"Leonardo DiCaprio",correct:true},
            {text:"Denzel Washington",correct:false},
            {text:"Will Smith", correct:false},
            {text:"Ryan Gosling", correct:false}
        ]
    },
    {
        question:"What movie did the actor in question 2 win with?",
        answer:[
            {text:"The tragedy of Macbeth",correct:false},
            {text:"King Richard",correct:false},
            {text:"Drive", correct:false},
            {text:"The Revenant", correct:false}
        ]
    },
    {
        question:"Which year did the movie, Mystic River come out ?",
        answer:[
            {text:"1973",correct:true},
            {text:"2010",correct:false},
            {text:"2003", correct:false},
            {text:"2005", correct:false}
        ]
    },
    {
        question:"Which of the directors below directed the movie titled Apocalypse Now?",
        answer:[
            {text:"Ford Coppola",correct:true},
            {text:"Akira Kurosawa",correct:false},
            {text:"David Lynch", correct:false},
            {text:"Ingmar Bergman", correct:false}
        ]
    }
]
startQuiz()
function startQuiz(){
    score=0;
    questionContainer.style.dispaly="flex";
    next.classList.remove("hide");
    restart.classList.add("hide");
    resultDiv.classList.add("hide");
    shuffledQuestions=questions.sort(() => Math.random()-0.5)
    setNextQuestion()
}
function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){
    questionElement.innerText=question.question;
    question
}