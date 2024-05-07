import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import styles from './App.module.css';
import useFeedback from 'hooks/useFeedback';
import Notification from './Notification/Notification';
import useStatistics from 'hooks/useStatistics';

export default function App() {
  const { feedback, updateFeedback } = useFeedback();
  const { positive, total } = useStatistics(feedback);

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} click={updateFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification>Give a feedback to see stats</Notification>
        ) : (
          <Statistics
            stats={feedback}
            total={total}
            positiveFeedback={positive}
          />
        )}
      </Section>
    </div>
  );
}

App.propTypes = {};
