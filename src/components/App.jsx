import { useState } from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = e => {
    const option = e.target.value;
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.bad + state.neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return parseInt((100 * state.good) / total);
  };

  return (
    <>
      <Section title="Please type Feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      {state.good || state.bad || state.neutral ? (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="no feedback" />
      )}
    </>
  );
};

export default App;
