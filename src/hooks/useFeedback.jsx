import { useState } from 'react';

const useFeedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
};

export default useFeedback;
