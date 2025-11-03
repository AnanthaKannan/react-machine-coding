import { useState, type FC } from "react";
import "./calculator.css";

interface Btn {
  name: string;
  action: string;
}

const BTN: Btn[] = [
  { name: "AC", action: "ac" },
  { name: "DEL", action: "del" },
  { name: "/", action: "/" },
  { name: "*", action: "*" },
  { name: "7", action: "7" },
  { name: "8", action: "8" },
  { name: "9", action: "9" },
  { name: "-", action: "-" },
  { name: "1", action: "1" },
  { name: "2", action: "2" },
  { name: "3", action: "3" },
  { name: "+", action: "+" },
  { name: "0", action: "0" },
  { name: "00", action: "00" },
  { name: ".", action: "dot" },
  { name: "=", action: "=" },
];

const Calculator: FC = () => {
  const [cal, setCal] = useState<string | number>("");
  const [symbol, setSymbol] = useState("false");
  const [fullres, setFullres] = useState<string>("");

  const [fsNum, setFsNum] = useState<Record<string, number | null>>({
    first: null,
    sec: null,
  });

  const getResult = (action: string) => {
    if (!isNaN(Number(action))) {
      setCal(action);

      if (fsNum.first === null) {
        setFsNum({ first: Number(action), sec: null });
      } else {
        setFsNum({ ...fsNum, sec: Number(action) });
      }

      setFullres(`${fullres} ${action}`);
    } else if (action === "del") {
      setCal(`${cal}`.slice(0, -1));
    } else if (action === "ac") {
      setCal("");
      setFullres("");
    } else {
      // math operation
      let value = cal;
      setSymbol(action);
      const { first, sec } = fsNum;
      if (first !== null && sec !== null) {
        if (symbol === "*") {
          const calRes = first * sec;
          setCal(calRes);
          value = calRes;
        } else if (symbol === "+") {
          const calRes = first + sec;
          setCal(calRes);
          value = calRes;
        } else if (symbol === "-") {
          const calRes = first - sec;
          setCal(calRes);
          value = calRes;
        } else if (symbol === "%") {
          const calRes = first % sec;
          setCal(calRes);
          value = calRes;
        }

        setFsNum({ first: Number(value), sec: null });
      }

      if (action !== "=") {
        setFullres(`${fullres} ${action}`);
      }
    }
  };

  return (
    <div>
      <div className="outside">
        <div className="display">
          <p className="res">{fullres}</p>
          <p className="cal">{Number(cal)}</p>
        </div>
        <div className="buttons">
          {BTN.map((item) => (
            <div
              className="button"
              onClick={() => getResult(item.action)}
              key={item.action}
            >
              <div className="inner">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
