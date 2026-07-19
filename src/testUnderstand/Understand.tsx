import { useState, useRef } from "react";
import { motion } from "framer-motion";

const numbers = [10, 20, 30, 40];

const code = [
  "const arr = [10, 20, 30, 40];",
  "for (let i = 0; i < arr.length; i++) {",
  "    console.log(arr[i]);",
  "}",
];

export default function Understand() {
  const [current, setCurrent] = useState(-1);
  const [output, setOutput] = useState([]);
  const timerRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);

  const startLoop = () => {
    clearInterval(timerRef.current);

    setCurrent(-1);
    setOutput([]);

    let i = 0;

    timerRef.current = setInterval(() => {
      if (i >= numbers.length) {
        setCurrentLine(0);
        clearInterval(timerRef.current);
        setCurrent(-1);
        return;
      }

      setCurrent(i);
      setCurrentLine(i);

      setOutput((prev) => [...prev, numbers[i]]);

      i++;
    }, 1000);
  };

  return (
    <div
      style={{
        padding: 30,
        background: "#111827",
        minHeight: "80vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h2>JavaScript For Loop Visualization</h2>

      <button
        onClick={startLoop}
        style={{
          padding: "10px 20px",
          marginBottom: 30,
          cursor: "pointer",
        }}
      >
        Start
      </button>

      <div
        style={{
          background: "#1e1e1e",
          color: "white",
          padding: 20,
          borderRadius: 8,
          fontFamily: "monospace",
        }}
      >
        {code.map((line, index) => (
          <motion.div
            key={index}
            animate={{
              backgroundColor:
                currentLine === index ? "#2563eb" : "rgba(0,0,0,0)",
              x: currentLine === index ? 10 : 0,
              scale: currentLine === index ? 1.03 : 1,
              opacity: currentLine === index ? 1 : 0.7,
            }}
            transition={{
              duration: 0.4,
            }}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              marginBottom: 4,
              fontFamily: "monospace",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <svg width="420" height="170">
        {/* Arrow */}
        {current !== -1 && (
          <>
            <motion.g
              animate={{
                x: current * 90,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <text
                x={35}
                y={20}
                textAnchor="middle"
                fill="orange"
                fontSize="20"
              >
                i
              </text>

              <text
                x={35}
                y={40}
                textAnchor="middle"
                fill="orange"
                fontSize="20"
              >
                ↓
              </text>
            </motion.g>
          </>
        )}

        {numbers.map((num, index) => (
          <g key={index}>
            <motion.rect
              x={index * 90}
              y={60}
              rx={10}
              width={70}
              height={70}
              animate={{
                fill: current === index ? "#f97316" : "#2563eb",
                scale: current === index ? 1.1 : 1,
              }}
              transition={{
                duration: 0.4,
              }}
            />

            <text
              x={index * 90 + 35}
              y={103}
              textAnchor="middle"
              fontSize="24"
              fill="white"
            >
              {num}
            </text>

            <text x={index * 90 + 35} y={150} textAnchor="middle" fill="gray">
              {index}
            </text>
          </g>
        ))}
      </svg>

      <h3>Console Output</h3>

      <div
        style={{
          background: "#1f2937",
          padding: 20,
          minHeight: 70,
          fontSize: 22,
          borderRadius: 8,
        }}
      >
        {output.join(", ")}
      </div>
    </div>
  );
}
