const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let questions = [],
    time = 30,
    score = 0,
    currentQuestion,
    timer;


const startBtn = document.querySelector(".start"),
    numQuestions = document.querySelector('#num-questions'),
    category = document.querySelector('#category'),
    difficulty = document.querySelector('#difficulty'),
    timePerQuestion = document.querySelector('#time'),
    quiz = document.querySelector('.quiz'),
    startscreen = document.querySelector('.start-screen');

const startQuiz = () => {
    const num = numQuestions.value;
    cat = category.value;
    diff = difficulty.value;
    loadingAnimation();
    //api url
    const YOUR_API_KEY = 'UcIUK3bGAsgs1XlsxJODNWWKVPGos3ouL6740zg6'; 
    const url = `https://quizapi.io/api/v1/questions?apiKey=${YOUR_API_KEY}&category=code&difficulty=${diff}&limit=${num}&tags=${cat}`;
    fetch(url)
        .then((res) => res.json())
        .then((results) => {
            questions = results;
            console.log(questions);
            setTimeout(() => {
              startscreen.classList.add("hide");
              quiz.classList.remove("hide");
              currentQuestion = 1;
              showQuestion(questions[0]);
            }, 1000);
        });
};

startBtn.addEventListener('click', startQuiz);

const showQuestion = (question) => {
    const questionText = document.querySelector(".question");
    answersWrapper = document.querySelector(".answer-wrapper"),
    questionNumber = document.querySelector(".number");
    questionText.innerHTML = question.question;

  let answers = [];
  // console.log(question.answers);
   for (var key in question.answers){
    if (question.answers[key] != null) {
      answers.push(question.answers[key]);
    }
   };
   console.log(answers);
    // const answers = [question.answers.answer_a,
    //      question.answers.answer_b,
    //     question.answers.answer_c,
    //     question.answers.answer_d];

  

    answers.sort(() => Math.random() - 0.5);
    answersWrapper.innerHTML = " ";
    answers.forEach((answer) => {
        answersWrapper.innerHTML += `
        <div class="answer">
        <span><xmp class = "text">${answer}</xmp></span>
            <span class="checkbox">
                <span class="icon">✓</span>
            </span>
            </div>              
    `;
    });

    questionNumber.innerHTML = `
    Question <span class = "current"> ${
        questions.indexOf(question) + 1
    }</span><span class = "total">/${questions.length}</span>
    `;

const answersDiv = document.querySelectorAll(".answer");
answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
        if (!answer.classList.contains("checked")) {
            answersDiv.forEach((answer) => {
                answer.classList.remove("selected");
            }); 
            answer.classList.add("selected");
            submitBtn.disabled = false; 
        }
    });
});

    time = timePerQuestion.value;
    startTimer (time);
};
const startTimer = (time) => {
    timer = setInterval(() => {
      if (time >= 0) {
        progress(time);
        time--;
      } else {
        checkAnswer();
      }
    }, 1000);
  };
  
  const loadingAnimation = () => {
    startBtn.innerHTML = "Загрузка...";
    const loadingInterval = setInterval(() => {
      if (startBtn.innerHTML.length === 10) {
        startBtn.innerHTML = "Загрузка...";
      } else {
        startBtn.innerHTML += ".";
      }
    }, 500);
  };
  const submitBtn = document.querySelector(".submit"),
    nextBtn = document.querySelector(".next");
  submitBtn.addEventListener("click", () => {
    checkAnswer();
  });
  
  
  nextBtn.addEventListener("click", () => {
    nextQuestion();
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";
  });
  
  const checkAnswer = () => {
    clearInterval(timer);
    const selectedAnswer = document.querySelector(".answer.selected");
    if (selectedAnswer) {
      
      const answer = selectedAnswer.querySelector(".text").innerHTML;
      console.log(currentQuestion);
      console.log("Выбранный ответ: " + answer);
      
      //В этой функции идет поиск правильного ответа и обьекта correct_answers где значения в виде булевого типа и потом сравнение с ответами 
      const searchCorrectAnswer = (questionArray) => {
        let numberCorAns = 0;
        let numberSelAns = 0;
        for (var item in questionArray.correct_answers){
          
          if (questionArray.correct_answers[item] === "true"){
            console.log("Правильный ответ: " + item + " под помером: " + numberCorAns);
            break;
            // return numberCorAns; 
          }
          else {
            numberCorAns++;
          }
        }
        for (var item in questionArray.answers){
          
          if(numberCorAns == numberSelAns){
            
            console.log("Правильный ответ на вопрос: " + questionArray.answers[item]);
            return questionArray.answers[item]; 
          }
          else{
            numberSelAns++
          }
          
        }
      }
      searchCorrectAnswer(questions[currentQuestion - 1]);
      // console.log(searchCorrectAnswer(questions[currentQuestion - 1]));
      if (answer === searchCorrectAnswer(questions[currentQuestion - 1])) {
        score++;
        selectedAnswer.classList.add("correct");
      } else {
        selectedAnswer.classList.add("wrong");
        const correctAnswer = document.querySelectorAll(".answer")
          .forEach((answer) => {
            if (
              answer.querySelector(".text").innerHTML ===
              questions[currentQuestion - 1].correct_answers) {
              answers.classList.add("correct");
            }
          });
      }
    } else {
      const correctAnswer = document.querySelectorAll(".answer").forEach((answer) => {
          if (
            answer.querySelector(".text").innerHTML ===
            searchCorrectAnswer(questions[currentQuestion - 1])
          ) {
            answers.classList.add("correct");
          }
        });
    }
    const answersDiv = document.querySelectorAll(".answer");
    answersDiv.forEach((answer) => {
      answer.classList.add("checked");
    });
  
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
  };
  
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      currentQuestion++;
      showQuestion(questions[currentQuestion - 1]);
    } else {
      showScore();
    }
  };
  
  const endScreen = document.querySelector(".end-screen"),
    finalScore = document.querySelector(".final-score"),
    totalScore = document.querySelector(".total-score");
  const showScore = () => {
    endScreen.classList.remove("hide");
    quiz.classList.add("hide");
    finalScore.innerHTML = score;
    totalScore.innerHTML = `/ ${questions.length}`;
  };
  
  const restartBtn = document.querySelector(".restart");
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });

  