import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, click }) {
  return (
    <ul className={styles.list}>
      {Object.keys(options).map(option => (
        <li key={option}>
          <button onClick={click}>{option}</button>
        </li>
      ))}
    </ul>
  );
}
