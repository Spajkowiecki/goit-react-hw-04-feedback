import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
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
          positive: <strong>{positiveFeedback}%</strong>
        </p>
      </li>
    </ul>
  );
}

// Statistics.propTypes = {
//   stats: PropTypes.object({
//     good: PropTypes.string,
//     neutral: PropTypes.string,
//     bad: PropTypes.string,
//   }),
//   total: PropTypes.number,
//   positiveFeedback: PropTypes.number,
// };
