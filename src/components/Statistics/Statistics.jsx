import styles from './Statistics.module.css';

export default function Statistics({ stats, total, positiveFeedback }) {
  return (
    <ul className={styles.stat}>
      {Object.keys(stats).map(stat => (
        <li key={stat}>
          <p>
            {stat}: <strong>{stats[stat]}</strong>
          </p>
        </li>
      ))}
      <li>
        <p>
          total: <strong>{total}</strong>
        </p>
      </li>
      <li>
        <p>
          positive: <strong>{positiveFeedback}</strong>
        </p>
      </li>
    </ul>
  );
}

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
