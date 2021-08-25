import PropTypes from 'prop-types';
import s from "./Statistics.module.css"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <div className={s.statisticsWrapper}>
    <div className={s.statisticsItem}>Good: {good}</div>
    <div className={s.statisticsItem}>Neutral: {neutral}</div>
    <div className={s.statisticsItem}>Bad: {bad}</div>
    <div className={s.statisticsItem}>Total: {total}</div>
    <div className={s.statisticsItem}>Positive feedback: {positivePercentage}%</div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};


export default Statistics;