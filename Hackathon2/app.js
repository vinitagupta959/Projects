
// pahle mujhe start btton ko select karna hoga
// phir mujhe un buttons pe click event lagana hoga
// phir agr front page ka button click hua toh mujhe front page ko hide karna hoga
// info box ko show karna hoga or use exit button pe click hua toh info box ko hide karna hoga or vps se front page ko show karna hoga
// agr info box ke continue button pe click hua toh mujhe info box ko hide karna hoga or category section ko show karna hoga
// category section me next button pe click hua toh mujhe category section ko hide karna hoga or question box ko show karna hoga
// mujhe box me namme jo maine input kiya hai usko display karna hoga
// mujhe category select karna hoga or uska value fetch karna hoga  vo bhi dificulty level ke hisab se
// pahle easy ke do questions fetch karne honge phir midium ke or phir dificult ke iske liye aisa kar skte hai ki ek array le le or umse dificulty ko dal de or phir us array ko shuffle kar de
// phir mujhe question ko display karna hoga or uske options ko display karna hoga question sirf ek hi hoga or options 4 honge or unme se ek hi correct hoga or baki galat or kis player ki turn hai vo bhi display karna hoga
// or answer dene kek bad sahi huaa to scorePlayer1 ki value bda  denge or nhi huaa to +0 kar denge or phir dusra question aa jayega or usme bhi same process hoga
// phir jab sare question khatam ho jaye toh result display karna hoga or usme winner ka name or score display karna hoga

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const front_page = document.querySelector(".front");
const exit_btn = document.querySelector(".quit");
const continue_btn = document.querySelector(".restart");
const category_section = document.querySelector(".category-section");

// button click karene par front page hide karna aur info box dikhana.
// onclick ka use kisi element par click hone par ek specific function ko execute karne ke liye hota hai.
start_btn.onclick = () => {
    front_page.style.display = "none"; 
    info_box.style.display = "block";     
};

// isko click karenge to vapas se front page me chale jayenge
exit_btn.onclick = () => {
    info_box.style.display = "none";   
    front_page.style.display = "block";   
    category_section.style.display = "none";  
    question_box.style.display = "none";   
};


// Continue button ko click karne par info box hide karna aur category section dikhana.
continue_btn.onclick = () => {
    info_box.style.display = "none"; 
    category_section.style.display = "block";  
};

const question_box = document.querySelector(".question-box");
const player1NameDisplay = document.getElementById('display-player1');
const player2NameDisplay = document.getElementById('display-player2');
const playerTurnDisplay = document.getElementById('player-turn');
const resultBox = document.getElementById('result-box');
const winnerText = document.getElementById('winner-text');
 

 let player1, player2; // player 1 and player 2 ka name store karne ke liye variable banaya hai.
 let currentPlayer = 1;//  ye varible turn change karne ke liye banaya gaya hai.
 let player1Score = 0; 
//  player ke score ko store karne ke liye  
 let player2Score = 0;
 let currentQuestionIndex = 0;
//  Yeh variable isliye banaya gaya hai taaki hum yeh track kar saken ki abhi game mein kaunsa question dikhaya ja raha hai.
 let questions = [];
// ismein hum questions store karenge.
 let timerInterval;
//timer ko shuru karne aur usse rokne ke liye
 let totalTimeInterval;
 let questionTimeInterval;
 const questionTimeLimit = 30;

const next_btn = document.getElementById("nextBtn");
next_btn.onclick = function(e) {
    e.preventDefault();  // button click hone par uska default behavior rokne ke liye
//     Player 1 aur Player 2 ke naam input se lete hain.
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;
    const selectedCategory = document.getElementById('category').value;   
    // Names ko screen par dikhate hain. Agar naam nahi diya, toh default naam dikhate hain.
    player1NameDisplay.textContent = player1Name || "Player 1";
    player2NameDisplay.textContent = player2Name || "Player 2";
    player1 = player1Name || "Player 1";  
    player2 = player2Name || "Player 2";  
    // Names ko local storage mein save kar rhe.
    localStorage.setItem('player1', player1);
    localStorage.setItem('player2', player2);
    // Category section ko chhupane ke liye aur question box ko dikhane ke liye.
    category_section.style.display = "none";
    question_box.style.display = "block";
    fetchQuestions(selectedCategory);
};

 //is function mein hum API se questions fetch karenge.
function fetchQuestions(category) {
    const url = `https://opentdb.com/api.php?amount=6&category=${category}&difficulty=easy&type=multiple`;

    console.log("Fetching questions from URL: ", url);   

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("API Response: ", data);  
        if (data.results && data.results.length > 0) {
            questions = data.results;
            console.log("Questions fetched: ", questions);
            totalTimeInterval = 20 * 60;  
            startTotalTimer();
            displayCurrentQuestion();
        } else {
            console.error("No questions found in response:", data);
            alert("No questions found for the selected category.");
        }
    })
    .catch(error => {
        console.error('Error fetching questions:', error);
        alert("There was an error fetching questions: " + error.message);
    });
}


function displayCurrentQuestion() {
    clearInterval(questionTimeInterval);  
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        playerTurnDisplay.textContent = `${currentPlayer === 1 ? player1 : player2}'s turn`; // Indicate current player by name
        document.getElementById('question-text').textContent = question.question;

        // Shuffle options
        const options = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
        const optionButtons = document.querySelectorAll('.option-item');

        optionButtons.forEach((btn, index) => {
            btn.textContent = options[index];
            btn.onclick = () => checkAnswer(options[index], question.correct_answer);
            btn.style.backgroundColor = "";  
            btn.disabled = false;  
        });

        startTimer();  
    } else {
        console.log('All questions have been answered.');
        console.log('Player 1 Score:', player1Score, 'Player 2 Score:', player2Score);
        endGame();  
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    clearInterval(questionTimeInterval);  
    const optionButtons = document.querySelectorAll('.option-item'); 
    const currentQuestion = questions[currentQuestionIndex];  
    const isCorrect = selectedAnswer === correctAnswer;
    optionButtons.forEach((btn) => {
        if (btn.textContent === correctAnswer) {
            btn.style.backgroundColor = "green";  
        } else if (btn.textContent === selectedAnswer) {
            btn.style.backgroundColor = "red"; // 
        }
        btn.disabled = true;  
    });
    let points = 0;
    if (currentQuestion.difficulty === 'easy') {
        points = 10;
    } else if (currentQuestion.difficulty === 'medium') {
        points = 15;
    } else if (currentQuestion.difficulty === 'hard') {
        points = 20;
    }

    if (isCorrect) {
        if (currentPlayer === 1) {
            player1Score += points;
        } else {
            player2Score += points;
        }
    }
    console.log("Current Scores: ", player1Score, player2Score);
    
    currentQuestionIndex++;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    setTimeout(() => {
        displayCurrentQuestion(); 
    }, 1000);
}


// Start a total timer for the entire game
function startTotalTimer() {
    const totalTimerDisplay = document.getElementById('timer');

    timerInterval = setInterval(() => {
        totalTimeInterval--;
        
        if (totalTimeInterval <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! The quiz is over.");
            endGame();  
               }
    }, 1000);
}

// Start the timer for the current question
function startTimer() {
    let questionTimeLeft = questionTimeLimit;  
    const questionTimerDisplay = document.getElementById('question-timer');
    questionTimerDisplay.textContent = `Time left: ${questionTimeLeft} sec`;

    questionTimeInterval = setInterval(() => {
        questionTimeLeft--;
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimeInterval);
            alert("Time's up for this question!");
            currentQuestionIndex++;
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            displayCurrentQuestion();
        }
        questionTimerDisplay.textContent = `Time left: ${questionTimeLeft} sec`;
    }, 1000);
}
// End game function
function endGame() {
    clearInterval(timerInterval);
    clearInterval(questionTimeInterval);
    question_box.style.display = "none";
    console.log("Player 1 Score:", player1Score, "Player 2 Score:", player2Score);
    console.log("Game Over!", resultBox);
    document.getElementById('result-box').style.display = "block";
    const winner = player1Score > player2Score ? player1 : player2Score > player1Score ? player2 : "It's a tie!";
    document.getElementById('winner-text').textContent = `${winner} is the winner!`;
    document.getElementById('final-score').textContent = `${player1}: ${player1Score}, ${player2}: ${player2Score}`;
}




// Restart game
function restartGame() {
    player1Score = 0;
    player2Score = 0;
    currentQuestionIndex = 0;
    currentPlayer = 1; // Reset to Player 1
    document.getElementById('result-box').style.display = "none";
    question_box.style.display = "block";
    displayCurrentQuestion(); // Load the first question again
}



// Get the exit quiz button
const exitQuizButton = document.getElementById('exit-quiz-button');
exitQuizButton.onclick = () => {
    resultBox.style.display = "none";
    category_section.style.display = "block";
};
