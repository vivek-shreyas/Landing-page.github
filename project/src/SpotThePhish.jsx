import React, { useState } from 'react';
import './SpotThePhish.css';

const questions = [
  {
    message: 'Your account has been locked. Click here to unlock: http://bit.ly/unlock-now',
    isPhish: true,
    explanation: 'The URL is shortened and suspicious, which is common in phishing.',
  },
  {
    message: 'Reminder: Your library book is due tomorrow. Return to avoid late fees.',
    isPhish: false,
    explanation: "No link and it's a typical reminder from a known service.",
  },
  {
    message: 'We noticed unusual login attempts. Confirm your identity now.',
    isPhish: true,
    explanation: 'Scare tactics are used here with no sender info or verification.',
  },
  {
    message: 'Hi Mum, can you send me $200? I lost my wallet. Use this BSB.',
    isPhish: true,
    explanation: 'Impersonation scams often target family members asking for urgent help.',
  },
  {
    message: 'Thanks for your order! Your package will arrive Friday.',
    isPhish: false,
    explanation: "Safe delivery notification if you're expecting it and it contains no links.",
  },
];

const SpotThePhish = () => {
  const [current, setCurrent] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (userSaysPhish) => {
    const correct = questions[current].isPhish === userSaysPhish;
    setResult({
      correct,
      explanation: questions[current].explanation,
    });
    setShowResult(true);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setResult(null);
    setCurrent((prev) => (prev + 1) % questions.length);
  };

  return (
    <div
      className="game-bg"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/fish-pattern.png'})` }}
    >
      <div className="game-container">
        <h2>🎣 Spot the Phish</h2>
        <div className="message-box">{questions[current].message}</div>

        {!showResult ? (
          <div className="buttons">
            <button onClick={() => handleAnswer(true)} className="btn danger">
              🚨 It's a Scam
            </button>
            <button onClick={() => handleAnswer(false)} className="btn safe">
              ✅ It's Safe
            </button>
          </div>
        ) : (
          <div className="result">
            <p className="feedback">{result.correct ? '✅ Correct!' : '❌ Not quite.'}</p>
            <p>{result.explanation}</p>
            <button onClick={nextQuestion} className="btn next">
              Next Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotThePhish;
