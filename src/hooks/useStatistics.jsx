import PropTypes from 'prop-types';

function useStatistics(data) {
  const total = data.good + data.neutral + data.bad;

  const sum = Object.values(data).reduce((acc, curr) => acc + curr);
  const positivePercentage = Math.floor((data.good / total) * 100);

  return { positive: positivePercentage, total: sum };
}

// useStatistics.propTypes = {
//   data: PropTypes.object({
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//   }),
// };

export default useStatistics;
