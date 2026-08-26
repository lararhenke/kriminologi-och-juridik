const screens = [...document.querySelectorAll(".screen")];
const conceptGrid = document.getElementById("concept-grid");
const quizTitle = document.getElementById("quiz-title");
const quizProgress = document.getElementById("quiz-progress");
const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const nextButton = document.getElementById("next-button");
const retryButton = document.getElementById("retry-button");

let currentQuizType = null;
let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let categoryStats = {};
let answered = false;

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderConcepts() {
  conceptGrid.innerHTML = "";
  concepts.forEach(item => {
    const card = document.createElement("div");
    card.className = "concept-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", item.term);
    card.innerHTML = `
      <div class="concept-card-inner">
        <div class="concept-face concept-front">
          <h3>${item.term}</h3>
        </div>
        <div class="concept-face concept-back">
          <h3>${item.shortDefinition}</h3>
          <p class="concept-details">${item.details}</p>
          <p class="concept-example"><strong>Exempel:</strong> <em>${item.example}</em></p>
        </div>
      </div>
    `;
    const flip = () => card.classList.toggle("flipped");
    card.addEventListener("click", flip);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flip();
      }
    });
    conceptGrid.appendChild(card);
  });
}

function startQuiz(type) {
  currentQuizType = type;
  const bank = type === "responsibility" ? responsibilityQuestions : rekvisitQuestions;
  currentQuestions = shuffle(bank).slice(0, 10);
  currentIndex = 0;
  correctCount = 0;
  categoryStats = {};
  quizTitle.textContent = type === "responsibility" ? "ANSVAR FÖR BROTT" : "BROTTSREKVISIT";
  showScreen("quiz-screen");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];

  quizProgress.textContent = `Fråga ${currentIndex + 1} av ${currentQuestions.length}`;
  questionCategory.textContent = q.category;
  questionText.textContent = q.question;
  answerOptions.innerHTML = "";
  feedback.className = "feedback hidden";
  nextButton.classList.add("hidden");

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index, button));
    answerOptions.appendChild(button);
  });
}

function selectAnswer(index, clickedButton) {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentIndex];
  const isCorrect = index === q.answer;

  if (!categoryStats[q.category]) {
    categoryStats[q.category] = { correct: 0, total: 0 };
  }
  categoryStats[q.category].total += 1;

  if (isCorrect) {
    correctCount += 1;
    categoryStats[q.category].correct += 1;
  }

  [...answerOptions.children].forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === q.answer) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  feedback.classList.remove("hidden", "correct-feedback");
  if (isCorrect) {
    feedback.classList.add("correct-feedback");
    feedbackTitle.textContent = "RÄTT";
  } else {
    feedbackTitle.textContent = "FEL";
  }
  feedbackText.textContent = q.explanation;

  nextButton.textContent = currentIndex === currentQuestions.length - 1 ? "VISA RESULTAT" : "NÄSTA FRÅGA";
  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const total = currentQuestions.length;
  const percent = Math.round((correctCount / total) * 100);

  document.getElementById("score-value").textContent = `${correctCount}/${total}`;
  document.getElementById("score-text").textContent =
    percent >= 90 ? "Mycket god koll på området." :
    percent >= 70 ? "Bra grund. Några delar kan tränas mer." :
    percent >= 50 ? "Du kan grunderna men behöver repetera flera delar." :
    "Repetera begreppen och gör sedan övningen igen.";

  const strengths = document.getElementById("strengths");
  const studyMore = document.getElementById("study-more");
  strengths.innerHTML = "";
  studyMore.innerHTML = "";

  const advice = studyAdvice[currentQuizType];
  let strengthCount = 0;
  let studyCount = 0;

  Object.entries(categoryStats).forEach(([category, stats]) => {
    const ratio = stats.correct / stats.total;
    const p = document.createElement("p");
    p.textContent = advice[category] || category;

    if (ratio >= 0.75) {
      strengths.appendChild(p);
      strengthCount++;
    } else {
      studyMore.appendChild(p);
      studyCount++;
    }
  });

  if (!strengthCount) {
    strengths.innerHTML = "<p>Gör gärna en ny omgång efter repetition.</p>";
  }
  if (!studyCount) {
    studyMore.innerHTML = "<p>Inget särskilt område sticker ut. Fortsätt repetera för att befästa kunskaperna.</p>";
  }

  showScreen("result-screen");
}

document.addEventListener("click", e => {
  const targetButton = e.target.closest("[data-target]");
  if (targetButton) {
    showScreen(targetButton.dataset.target);
  }

  const quizButton = e.target.closest("[data-quiz]");
  if (quizButton) {
    startQuiz(quizButton.dataset.quiz);
  }
});

nextButton.addEventListener("click", nextQuestion);
retryButton.addEventListener("click", () => startQuiz(currentQuizType));

renderConcepts();
