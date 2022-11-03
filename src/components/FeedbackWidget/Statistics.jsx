import css from './Feedback.module.css'
import propTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.statistics_list}>
      <li>
        <p>Goog: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {countTotalFeedback}</p>
      </li>
      <li>
        <p>
          Positive feedback:
          {countPositiveFeedbackPercentage}%
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  countTotalFeedback: propTypes.number,
  countPositiveFeedbackPercentage: propTypes.number,
};
