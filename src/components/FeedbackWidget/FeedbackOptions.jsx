import propTypes from 'prop-types';
import css from './Feedback.module.css'
export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <ul className={css.btn_list}>
      <li className={css.btn_item}>
        <button className={css.btn} type="button" onClick={onGood}>
          Good
        </button>
      </li>
      <li className={css.btn_item}>
        <button className={css.btn} type="button" onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li className={css.btn_item}>
        <button className={css.btn} type="button" onClick={onBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onGood: propTypes.func.isRequired,
  onNeutral: propTypes.func.isRequired,
  onBad: propTypes.func.isRequired,
};
