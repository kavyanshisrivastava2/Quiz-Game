const quizDB = [
    {
        question: "Q1: What is the name of the second part of Harry Potter movie?",
        a : "Prisnor of Askaban",
        b : "Goblet of Fire",
        c : "Chamber of Secrets",
        d : "Half Blood Prince",
        ans : "ans3"

    },
    {
        question: "Q2: What is the name of Harry best friend name",
        a : "Ronald Weaseley",
        b : "Draco Malfoy",
        c : "Severus Snape",
        d : "Gilderoy Lockhart",
        ans : "ans1"

    },
    {
        question: "Q3: Which of the following is the Harry Potter School name",
        a : "Magical School",
        b : "Darkland",
        c : "Hogwarts",
        d : "Hogsmede",
        ans : "ans3"

    },
   {
        question: "Q4: What is the name of Harry;s mother?",
        a : "Prof. Mckgonical",
        b : "Lily",
        c : "Suzi",
        d : "Winson",
        ans : "ans2"

    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit =  document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
    
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length}🙄 </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');


    }
}
);
