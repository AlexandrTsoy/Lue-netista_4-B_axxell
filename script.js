const questionData = [
    {
    description: "Banaaninkuoret",
    correctAnswer: 0,
    image: "./1banaaninkuoret.jpg"
    },
    {
    description: "Energiansaastolamput",
    correctAnswer: 1,
    image: "./2energiansaastolamput.jpg"
    },
    {
    description: "Hehkulamppu",
    correctAnswer: 1,
    image: "./3hehkulamppu.jpg"
    },
    {
    description: "Hiuslakkapullo",
    correctAnswer: 1,
    image: "./4hiuslakkapullo.jpg"
    },
    {
    description: "Jaatelopakkaukset",
    correctAnswer: 2,
    image: "./5jaatelopakkaukset.jpg"
    },
    {
    description: "Kahvinporot",
    correctAnswer: 0,
    image: "./6kahvinporot.jpg"
    },
    {
    description: "Kahvipussi",
    correctAnswer: 6,
    image: "./7kahvipussi.jpg"
    },
    {
    description: "Kartonkipakkaukset",
    correctAnswer: 2,
    image: "./8kartonkipakkaukset.jpg"
    },
    {
    description: "Kasidesi",
    correctAnswer: 6,
    image: "./9kasidesi.jpg"
    },
    {
    description: "Kirjekuori",
    correctAnswer: 7,
    image: "./10kirjekuori.jpg"
    },
    {
    description: "Kukka ja multaa",
    correctAnswer: 0,
    image: "./11kukka-ja-multaa.jpg"
    },
    {
    description: "Kuumemittari",
    correctAnswer: 1,
    image: "./12kuumemittari.jpg"
    },
    {
    description: "Kynsilakka",
    correctAnswer: 1,
    image: "./13kynsilakka.jpg"
    },
    {
    description: "Leivinpaperi",
    correctAnswer: 3,
    image: "./14leivinpaperi.jpg"
    },
    {
    description: "Maalipurkki",
    correctAnswer: 1,
    image: "./15maalipurkki.jpg"
    },
    {
    description: "Mainoslehdet",
    correctAnswer: 3,
    image: "./16mainoslehdet.jpg"
    },
    {
    description: "Maitopurkit",
    correctAnswer: 2,
    image: "./17maitopurkit.jpg"
    },
    {
    description: "Metallifolio",
    correctAnswer: 5,
    image: "./18metallifolio.jpg"
    },
    {
    description: "Metallikorkit",
    correctAnswer: 5,
    image: "./19metallikorkit.jpg"
    },
    {
    description: "Muoviastiat",
    correctAnswer: 6,
    image: "./20muoviastiat.jpg"
    },
    {
    description: "Muovikass",
    correctAnswer: 6,
    image: "./21muovikassi.jpg"
    },
    {
    description: "Pahvilaatikko",
    correctAnswer: 2,
    image: "./22pahvilaatikko.jpg"
    },
    {
    description: "Pantiton pullo",
    correctAnswer: 1,
    image: "./23pantiton-pullo.jpg"
    },
    {
    description: "Panttipullot",
    correctAnswer: 4,
    image: "./24panttipullot.jpg"
    },
    {
    description: "Paperipussi",
    correctAnswer: 3,
    image: "./25paperipussi.jpg"
    },
    {
    description: "Paperit",
    correctAnswer: 3,
    image: "./26paperit.jpg"
    },
    {
    description: "Pilaantunut ruoka",
    correctAnswer: 0,
    image: "./27pilaantunut-ruoka.jpg"
    },
    {
    description: "Pyykinpesuneste",
    correctAnswer: 6,
    image: "./28pyykinpesuneste.jpg"
    },
    {
    description: "Rikkinainen juomalasi",
    correctAnswer: 4,
    image: "./29rikkinainen-juomalasi.jpg"
    },
    {
    description: "Rikkinainen kannykka",
    correctAnswer: 1,
    image: "./30rikkinainen-kannykka.jpg"
    },
    {
    description: "Rikkinainen-lappari",
    correctAnswer: 1,
    image: "./31rikkinainen-lappari.jpg"
    },
    {
    description: "Rikkinaiset-farkut",
    correctAnswer: 7,
    image: "./32rikkinaiset-farkut.jpg"
    },
    {
    description: "Ruuvit-ja-naulat",
    correctAnswer: 5,
    image: "./33ruuvit-ja-naulat.jpg"
    },
    {
    description: "Sailyketolkki",
    correctAnswer: 5,
    image: "./34sailyketolkki.jpg"
    },
    {
    description: "Shampoopullo",
    correctAnswer: 6,
    image: "./35shampoopullo.jpg"
    },
    {
    description: "Teepussi",
    correctAnswer: 7,
    image: "./36teepussi.jpg"
    },
    {
    description: "Uloste",
    correctAnswer: 7,
    image: "./37uloste.jpg"
    },
    {
    description: "Vaipat",
    correctAnswer: 7,
    image: "./38vaipat.jpg"
    },
    {
    description: "Vanha oljy",
    correctAnswer: 1,
    image: "./39vanha-oljy.jpg"
    },
    {
    description: "Vanhat akut",
    correctAnswer: 1,
    image: "./40vanhat-akut.jpg"
    },
    {
    description: "Vanha talouspaperi",
    correctAnswer: 3,
    image: "./41vanha-talouspaperi.jpg"
    },
    {
    description: "Vanhat kattilat",
    correctAnswer: 5,
    image: "./42vanhat-kattilat.jpg"
    },
    {
    description: "Vanhat laakkeet",
    correctAnswer: 1,
    image: "./43vanhat-laakkeet.jpg"
    },
    {
    description: "Vanhat paristot",
    correctAnswer: 1,
    image: "./44vanhat-paristot.jpg"
    },
    {
    description: "Vessapaperi",
    correctAnswer: 0,
    image: "./45vessapaperi.jpg"
    },
    {
    description: "Vessapaperirullan keskiö",
    correctAnswer: 2,
    image: "./46vessapaperirullan-keskiö.jpg"
    }
];




const totalQuestions = questionData.length;
let currentQuestion = 0;
let correctCount = 0;
const correctAnswers = new Array(totalQuestions).fill(false);

const questionText = document.getElementById("question-text");
const answerButtonsContainer = document.querySelector(".card-body");
const correctAnswersSpan = document.getElementById("correct-answers");
const totalQuestionsSpan = document.getElementById("total-questions");





function toggleQuestionImage() {
    const questionImage = document.getElementById("question-image");
    if (questionImage.style.display === "none") {
        const currentQuestionData = questionData[currentQuestion];
        const questionImageSrc = currentQuestionData.image;
        questionImage.querySelector("img").src = questionImageSrc;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }
}







function initializeGame() {
    if (currentQuestion < totalQuestions) {
        const currentQuestionData = questionData[currentQuestion];
        questionText.textContent = "" + currentQuestionData.description;
        
            answerButtonsContainer.innerHTML = ""; 


            hideQuestionImage();
            answerButtonsContainer.innerHTML = ""; 



            const answerImages = [
                "./biojate_vihrea.jpg",
                "./jateasema.jpg",
                "./kartonkikerays.jpg",
                "./kerayspaperi.jpg",
                "./lasinkerays.jpg",
                "./metallijate.jpg",
                "./muovipakkaukset.jpg",
                "./sekajate.jpg"
        ];

        const row1 = document.createElement("div");
        row1.className = "row";

            for (let i = 0; i < 4; i++) {
                const answerContainer = document.createElement("div");
                answerContainer.className = "col-md-3 text-center"; 

const answerButton = document.createElement("img");
answerButton.className = "btn btn-primary answer-button";
answerButton.src = answerImages[i];
answerButton.setAttribute("data-answer-index", i);

    answerButton.addEventListener("click", () => {
    checkAnswer(answerButton);
});

const answerText = document.createElement("p");
answerText.className = "answer-text";
answerText.textContent = "" + getAnswerName(i);;
answerContainer.appendChild(answerButton);
answerContainer.appendChild(answerText);

row1.appendChild(answerContainer);
}

const row2 = document.createElement("div");
row2.className = "row";

        for (let i = 4; i < 8; i++) {
            const answerContainer = document.createElement("div");
            answerContainer.className = "col-md-3 text-center"; 

const answerButton = document.createElement("img");
answerButton.className = "btn btn-primary answer-button";
answerButton.src = answerImages[i];
answerButton.setAttribute("data-answer-index", i);

answerButton.addEventListener("click", () => {
checkAnswer(answerButton);
});

const answerText = document.createElement("p");
answerText.className = "answer-text";
answerText.textContent = "" + getAnswerName(i);;

answerContainer.appendChild(answerButton);
answerContainer.appendChild(answerText);

row2.appendChild(answerContainer);
}

answerButtonsContainer.appendChild(row1);
answerButtonsContainer.appendChild(row2);
    } else {
        const questionCard = document.getElementById("question-card");
        const resultsContainer = document.getElementById("results-container");
        questionCard.style.display = "none";
        resultsContainer.classList.remove("d-none");
        showResults();
}
}














function hideQuestionImage() {
    const questionImage = document.getElementById("question-image");
    questionImage.style.display = "none";
}













function checkAnswer(selectedButton) {
const selectedAnswerIndex = parseInt(selectedButton.getAttribute("data-answer-index"));
const currentQuestionData = questionData[currentQuestion];
        if (selectedAnswerIndex === currentQuestionData.correctAnswer) {
            selectedButton.classList.add("btn-success");
            correctAnswers[currentQuestion] = true;
            correctCount++;
        } else {
            selectedButton.classList.add("btn-danger");
}

currentQuestion++;
correctAnswersSpan.textContent = correctCount;
totalQuestionsSpan.textContent = currentQuestion;
initializeGame();
}












function showResults() {
const resultsContainer = document.getElementById("results-container");
resultsContainer.classList.add("text-center"); 

const resultGrid = resultsContainer.querySelector(".row");

        for (let i = 0; i < totalQuestions; i++) {
            const currentQuestionData = questionData[i];
            const resultCard = document.createElement("div");
            resultCard.className = "col-md-3 result-card";

        if (correctAnswers[i]) {
            resultCard.classList.add("correct");
        } else {
            resultCard.classList.add("incorrect");
}

const questionDescription = document.createElement("p");
questionDescription.textContent = "" + (i + 1) + ": " + currentQuestionData.description;

        if (!correctAnswers[i]) {
            const correctAnswerName = getAnswerName(currentQuestionData.correctAnswer);
            const correctAnswerLabel = document.createElement("p");
            correctAnswerLabel.className = "text-success";
            correctAnswerLabel.textContent = "Oikea vastaus: " + correctAnswerName;
            questionDescription.appendChild(correctAnswerLabel);
}

    resultCard.appendChild(questionDescription);
    resultGrid.appendChild(resultCard);
}
    showRestartButton();
}









function getAnswerName(answerIndex) {
const answerNames = [
            "Biojate vihrea",
            "Jateasema",
            "Kartonkikerays",
            "Kerayspaperi",
            "Lasinkerays",
            "Metallijate",
            "Muovipakkaukset",
            "Sekajate"
];
return answerNames[answerIndex];
}













function restartGame() {
const restartButton = document.getElementById("restart-button");
restartButton.style.display = "none"; 

currentQuestion = 0;
correctCount = 0;
correctAnswers.fill(false);
correctAnswersSpan.textContent = correctCount;
totalQuestionsSpan.textContent = currentQuestion;

const resultsContainer = document.getElementById("results-container");
resultsContainer.classList.add("d-none");

const resultGrid = resultsContainer.querySelector(".row");
resultGrid.innerHTML = ''; 

const questionCard = document.getElementById("question-card");
questionCard.style.display = "block";

initializeGame();
}














function showRestartButton() {
const restartButtonTop = document.getElementById("restart-button");
const restartButtonBottom = document.getElementById("restart-button-bottom");

restartButtonTop.style.display = "block";
restartButtonBottom.style.display = "block";
}


initializeGame();

