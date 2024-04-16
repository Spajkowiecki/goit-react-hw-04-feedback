import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div>
      <h2 className={styles.h2}>{title}</h2>
      {children}
    </div>
  );
}
// Section.propTypes = {
//   title: PropTypes.string,
// };
