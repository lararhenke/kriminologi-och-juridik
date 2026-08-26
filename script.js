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
let conceptOrder = [...concepts];

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

function renderConcepts(items = conceptOrder) {
  conceptGrid.innerHTML = "";
  items.forEach(item => {
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

function createConceptShuffleControl() {
  if (!conceptGrid || document.getElementById("concept-shuffle-button")) return;

  const controls = document.createElement("div");
  controls.className = "concept-controls";

  const button = document.createElement("button");
  button.type = "button";
  button.id = "concept-shuffle-button";
  button.className = "concept-shuffle-button";
  button.setAttribute("aria-label", "Blanda ordningen på begreppskorten");
  button.innerHTML = `
    <span class="shuffle-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M7.1 7.1A7 7 0 0 1 18 9" />
        <path d="M18 5v4h-4" />
        <path d="M16.9 16.9A7 7 0 0 1 6 15" />
        <path d="M6 19v-4h4" />
      </svg>
    </span>
    <span>BLANDA ORDNINGEN</span>
  `;

  button.addEventListener("click", () => {
    conceptOrder = shuffle(conceptOrder);
    renderConcepts(conceptOrder);
  });

  controls.appendChild(button);
  conceptGrid.parentNode.insertBefore(controls, conceptGrid);
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



const wrongConceptFeedback = {
  "rättspositivism": "Rättspositivism handlar om att skilja mellan vilken lag som faktiskt gäller och hur lagen anses borde vara.",
  "legalitetsprincipen": "Legalitetsprincipen handlar om att ingen får straffas för en handling som inte var kriminaliserad när den utfördes.",
  "proportionalitetsprincipen": "Proportionalitetsprincipen handlar om att straff och andra åtgärder ska stå i rimlig proportion till handlingen.",
  "objektivitetsprincipen": "Objektivitetsprincipen handlar om att myndigheter och domstolar ska agera sakligt och opartiskt.",
  "strikt ansvar": "Strikt ansvar handlar om ansvar som i vissa fall kan uppstå utan krav på bevisat uppsåt eller oaktsamhet.",
  "rent handlingsbrott": "Ett rent handlingsbrott kan vara fullbordat genom själva den förbjudna handlingen utan att en särskild effekt behöver uppstå.",
  "rena handlingsbrott": "Rena handlingsbrott kan vara fullbordade genom själva den förbjudna handlingen utan att en särskild effekt behöver uppstå.",
  "effektbrott": "Effektbrott handlar om brott där en bestämd effekt eller följd måste uppstå.",
  "brottsrekvisit": "Brottsrekvisit är de krav i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
  "objektiva brottsrekvisit": "Objektiva brottsrekvisit handlar om de yttre och faktiska omständigheterna kring gärningen.",
  "subjektiva brottsrekvisit": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet."
};

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function conceptKey(answer) {
  const normalized = answer.trim().toLowerCase().replace(/\.$/, "");
  return Object.prototype.hasOwnProperty.call(wrongConceptFeedback, normalized) ? normalized : null;
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
  feedbackTitle.classList.remove("feedback-title-wrong");

  if (isCorrect) {
    feedback.classList.add("correct-feedback");
    feedbackTitle.textContent = "RÄTT";
    feedbackText.textContent = "";
  } else {
    feedbackTitle.textContent = "FEL";
    feedbackTitle.classList.add("feedback-title-wrong");

    const selectedAnswer = q.options[index];
    const correctAnswer = q.options[q.answer];
    const selectedConcept = conceptKey(selectedAnswer);

    const wrongPart = selectedConcept
      ? `<span class="wrong-concept-line"><strong>${escapeHTML(selectedAnswer)}</strong> ${escapeHTML(
          wrongConceptFeedback[selectedConcept]
            .replace(/^Rättspositivism\s*/i, "")
            .replace(/^Legalitetsprincipen\s*/i, "")
            .replace(/^Proportionalitetsprincipen\s*/i, "")
            .replace(/^Objektivitetsprincipen\s*/i, "")
            .replace(/^Strikt ansvar\s*/i, "")
            .replace(/^Ett rent handlingsbrott\s*/i, "")
            .replace(/^Rena handlingsbrott\s*/i, "")
            .replace(/^Effektbrott\s*/i, "")
            .replace(/^Brottsrekvisit\s*/i, "")
            .replace(/^Objektiva brottsrekvisit\s*/i, "")
            .replace(/^Subjektiva brottsrekvisit\s*/i, "")
            .trim()
        )}</span>`
      : "";

    feedbackText.innerHTML =
      wrongPart +
      `<span class="correct-answer-line">Rätt svar är <strong>${escapeHTML(correctAnswer)}</strong> ${escapeHTML(q.correctExplanation || q.explanation)}</span>`;
  }

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

createConceptShuffleControl();
renderConcepts(conceptOrder);
