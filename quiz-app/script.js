const quizData = [
  {
    question: "How many passes does an insertion sort algorithm consist of?",
    a: "N",
    b: "N+1",
    c: "N-1",
    d: "N^2",
    correct: c,
  },
  {
    question:
      "Which of the following algorithm implementations is similar to that of an insertion sort?",
    a: "Binary Heap",
    b: "Quick Sort",
    c: "Merge Sort",
    d: "Radix Sort",
    correct: a,
  },
  {
    question:
      "Any algorithm that sorts by exchanging adjacent elements require O(N2) on average.",
    a: "True",
    b: "False",
    correct: a,
  },
  {
    question:
      "What is the advantage of recursive approach than an iterative approach?",
    a: "Consumes less memory",
    b: "Less code and easy to implement",
    c: "Consumes more memory",
    d: "More code has to be written",
    correct: b,
  },
  {
    question:
      "What is the worst case complexity of binary search using recursion",
    a: "O(nlogn)",
    b: "O(logn)",
    c: "O(n)",
    d: "O(n2)",

    correct: b,
  },
  {
    question: "Which of the following is not an application of binary search? ",
    a: "To find the lower/upper bound in an ordered sequence",
    b: "Union of intervals",
    c: "Debugging",
    d: "To search in unordered list",
    correct: d,
  },
  {
    question:
      " Merge sort uses which of the following technique to implement sorting?",
    a: "backtracking",
    b: "greedy algorithm",
    c: "divide and conquer",
    d: "dynamic programming",
    correct: c,
  },
  {
    question: "What is the auxiliary space complexity of merge sort?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n log n)",
    correct: c,
  },
  {
    question: "What is the worst case time complexity of merge sort?",
    a: "O(n log n)",
    b: "O(n2)",
    c: "O(n2 log n)",
    d: "O(n log n2)",
    correct: a,
  },
  {
    question: "What is an internal sorting algorithm?",
    a: "Algorithm that uses tape or disk during the sort",
    b: "Algorithm that uses main memory during the sort",
    c: "Algorithm that involves swapping",
    d: "Algorithm that are considered ‘in place’",

    correct: b,
  },
];
const answerEls = document.querySelectorAll(".answer");
const quizEls = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deSelect();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct.id) {
      score = score + 1;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizEls.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions. </h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
