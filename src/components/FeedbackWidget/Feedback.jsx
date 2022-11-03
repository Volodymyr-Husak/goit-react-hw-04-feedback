import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGood = evt => {
    setGood(prevState => prevState + 1);
  };
  const onNeutral = evt => {
    setNeutral(prevState => prevState + 1);
  };
  const onBad = evt => {
    setBad(prevState => prevState + 1);
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGood={onGood}
          onNeutral={onNeutral}
          onBad={onBad}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
