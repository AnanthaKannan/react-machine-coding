import { useState, useRef, useEffect } from "react";
import "./accordion.css";

const accordionItems = [
  {
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    title: "Why use React?",
    content:
      "React makes it easy to create interactive UIs, efficiently updates and renders components, and has a strong community support.",
  },
  {
    title: "How to get started with React?",
    content: `I am still quite confused and unsure on which classes I should use on the Accordion API of MUI and it would be of great help to gain some guides ...
How to expand MaterialUI Accordion by clicking on a ...
1 answer
23 Oct 2022
Material-UI Accordion (formerly ExpansionTable ...
5 answers
1 Jul 2020
More results from stackoverflow.com
`,
  },
];

interface AccordionItemProps {
  title: string;
  content: string;
}

interface AccordionProps {
  items?: AccordionItemProps[];
}

export const Accordion = ({ items = accordionItems }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize or resize the refs array to match items length
    // console.log("------------", contentRefs);
    contentRefs.current = Array(items.length).fill(null);
  }, [items]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const contentRef = contentRefs.current[index];
        const contentHeight = contentRef?.scrollHeight;

        return (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-header ${isActive ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="accordion-icon">{isActive ? "−" : "+"}</span>
            </button>
            <div
              ref={(el: HTMLDivElement | null) => {
                contentRefs.current[index] = el;
              }}
              className={`accordion-content ${isActive ? "active" : ""}`}
              style={{
                height: isActive ? `${contentHeight}px` : "0px",
              }}
            >
              <div className="accordion-content-inner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
