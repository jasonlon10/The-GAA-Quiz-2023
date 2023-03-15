document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.querySelector('#quiz-form');
    const answerFeedbackEl = document.querySelector('.answer-feedback');
    const correctCountEl = document.querySelector('#correct-count');
    const incorrectCountEl = document.querySelector('#incorrect-count');
    
    // Quiz answers
    const correctAnswers = ['b', 'a', 'c', 'a'];
    let correctCount = 0;
    let incorrectCount = 0;
  
    // Update count of correct and incorrect answers
    function updateAnswerCount() {
      correctCountEl.textContent = correctCount;
      incorrectCountEl.textContent = incorrectCount;
    }
    // Submit quiz answers
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Check answers and update counts
        correctCount = 0;
        incorrectCount = 0;
        for (let i = 1; i <= 4; i++) {
          const questionName = `question${i}`;
          const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
          if (selectedAnswer) {
            const selectedAnswerValue = selectedAnswer.value;
            if (selectedAnswerValue === correctAnswers[i-1]) {
              correctCount++;
            } else {
              incorrectCount++;
            }
          }
        }
        
        // Display feedback message
        if (correctCount === 4) {
          answerFeedbackEl.textContent = 'Congratulations! You got all the answers correct!';
        } else if (correctCount === 0) {
          answerFeedbackEl.textContent = 'Sorry, all your answers are incorrect.';
        } else {
          answerFeedbackEl.textContent = `You got ${correctCount} answers correct and ${incorrectCount} answers incorrect.`;
        }
        
        // Update count of correct and incorrect answers
        updateAnswerCount();
      });
    });  
  