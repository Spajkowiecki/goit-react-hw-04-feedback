const { useEffect, useState } = require('react');

const useStatistics = data => {
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    const sum = Object.values(data).reduce((acc, curr) => acc + curr);
    const positivePercentage = Math.floor((data.good / total) * 100);
    setTotal(sum);
    setPositive(positivePercentage);
  }, [data, positive, total]);

  return { positive, total };
};
export default useStatistics;
