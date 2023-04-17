import css from './Statistics.module.css';

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

export default Statistics;
