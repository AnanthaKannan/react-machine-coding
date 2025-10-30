import { useState, useRef } from "react";
import type { FC } from "react";
import "./accordionv1.css";

interface Item {
  header: string;
  content: string;
}

const items: Item[] = [
  {
    header: "what is react?",
    content:
      "React is a JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    header: "why use react?",
    content:
      "React makes it easy to create interactive UIs, efficiently updates and renders components, and has a strong community support.",
  },
  {
    header: "How to get started with React?",
    content: `I am still quite confused and unsure on which classes I should use on the Accordion API of MUI and it would be of great help to gain some guides ... How to expand MaterialUI Accordion by clicking on a ... 1 answer 23 Oct 2022 Material-UI Accordion (formerly ExpansionTable ... 5 answers 1 Jul 2020 More results from stackoverflow.com`,
  },
];

const AccordionV1: FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const ref = useRef<number[]>(Array(items.length).fill(0));

  const activate = (idx: number) => {
    setActiveIdx(idx === activeIdx ? -1 : idx);
  };

  return (
    <div className="container">
      {items.map(({ header, content }, idx) => {
        const isActive = idx == activeIdx;
        const scrollHeight = ref.current[idx];

        return (
          <div key={idx}>
            <div className="head" onClick={() => activate(idx)}>
              <div>{header}</div>
              <div className="sign">{isActive ? "−" : "+"}</div>
            </div>
            <div
              ref={(e: HTMLDivElement) => {
                ref.current[idx] = e?.scrollHeight;
              }}
              className="content"
              style={{ height: isActive ? scrollHeight : 0 }}
            >
              <div>{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionV1;
