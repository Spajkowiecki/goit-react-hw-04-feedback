import { useState } from 'react';
import PropTypes from 'prop-types';
function useFeedback() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //function to hanlde button press
  const updateFeedback = event => {
    const update = event.currentTarget.textContent;
    setFeedback(prev => {
      return {
        ...prev,
        [update]: prev[update] + 1,
      };
    });
  };

  return { feedback, setFeedback, updateFeedback };
}

// useFeedback.propTypes = {
//   feedback: PropTypes.object({
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//   }),
// };
export default useFeedback;
