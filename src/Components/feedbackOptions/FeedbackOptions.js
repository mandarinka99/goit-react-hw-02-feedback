import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from "./FedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {

  return (
    <div className={s.feedbackWrapper}>
    {options.map(option => 
      (<button key={uuidv4()} type="button" onClick={() => 
        onLeaveFeedback(option)}
        className={s.button}>{`${option}`}</button>))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;