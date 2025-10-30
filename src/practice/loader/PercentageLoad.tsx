import { useEffect, useState } from "react";
import "./percengateLoder.css";
const PercentageLoader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setPercentage((prev) => {
        if (prev === 100) {
          clearInterval(timerId);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
  }, []);

  return (
    <div id="pload">
      <div className="outer">
        <div className="inner" style={{ width: `${percentage}%` }}></div>
      </div>
      <h3> Loading... {percentage}%</h3>
    </div>
  );
};

export default PercentageLoader;
