import { useState, useEffect } from 'react';
import './App.css';
import Feedback from "./components/Feedback/Feedback";
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbackState, setFeedbackState] = useState(() => {
    const savedFeedback = localStorage.getItem('feedbackState');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback =
    feedbackState.good + feedbackState.neutral + feedbackState.bad;

  const positiveFeedback = totalFeedback > 0 ? Math.round(
    (feedbackState.good / totalFeedback) * 100
  ) : 0;

  useEffect(() => {
    localStorage.setItem('feedbackState', JSON.stringify(feedbackState));
  }, [feedbackState]);

  const updateFeedback = (type) => {
    setFeedbackState((prevState) => {
      if (type === "resetAll") {
        return { good: 0, neutral: 0, bad: 0 };
      }
      return { ...prevState, [type]: prevState[type] + 1 };
    });
  };

  return (
    <>
      <div className='content'>
        <section>
          <h1>Sip Happens Café</h1>
          <p>
            Please leave your feedback about our service by selecting one of the options below.
          </p>
        </section>
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback}/>
        <section>
          {totalFeedback > 0 ? (
            <Feedback
              good={feedbackState.good}
              neutral={feedbackState.neutral}
              bad={feedbackState.bad}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification />
          )}
        </section>
      </div>
    </>
  );
}

export default App;
