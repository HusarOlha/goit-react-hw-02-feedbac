import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css['container-stat']}>
      <ul>
        <li>
          <p>
            Good: <span className={css['stat-text']}>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral:<span className={css['stat-text']}>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad: <span className={css['stat-text']}>{bad}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback:{' '}
            <span className={css['stat-text']}> {positivePercentage()} %</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
