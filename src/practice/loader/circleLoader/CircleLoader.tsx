import type { FC } from "react";

import "./circleLoader.css";

const CircleLoader: FC = () => {
  return (
    <div id="cload">
      <div className="spinner"></div>
    </div>
  );
};

export default CircleLoader;
