// Update the component to use TypeScript features

import { type FC, type ReactNode, type MouseEvent, useState } from "react";
import "./tooltip.css";

interface TpParams {
  message?: string;
  children: ReactNode;
}

const Tp: FC<TpParams> = ({ message = "I am here", children }) => {
  const [classPosition, setClassPosition] = useState("");

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget.getBoundingClientRect();
    const left = btn.left - e.clientX;
    const right = btn.right - e.clientX;
    const top = btn.top - e.clientY;
    const bottom = btn.bottom - e.clientY;
    const position = [
      { value: Math.abs(left), class: "left" },
      { value: Math.abs(right), class: "right" },
      { value: Math.abs(top), class: "top" },
      { value: Math.abs(bottom), class: "bottom" },
    ];

    const currentPosition = position
      .filter((item) => item.value > 0)
      .sort((a, b) => a.value - b.value)[0];
    setClassPosition(currentPosition.class);
  };

  const handleMouseLeave = () => {
    setClassPosition("");
  };

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="tool-tip-container"
    >
      {children}
      <div className={`message ${classPosition}`}>{message}</div>
    </div>
  );
};

const Tooltip: FC = () => {
  return (
    <div id="tp">
      <Tp>
        <button>BTN</button>
      </Tp>
    </div>
  );
};

export default Tooltip;
