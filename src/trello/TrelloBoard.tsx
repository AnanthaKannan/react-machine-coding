import React, { useState } from "react";
import Column from "./Column";
import "./trello.css";

export type CardItem = { id: string; text: string };
export type ColumnItem = { id: string; title: string; cards: CardItem[] };

const initial: ColumnItem[] = [
  {
    id: "col-1",
    title: "To do",
    cards: [
      { id: "c-1", text: "Buy groceries" },
      { id: "c-2", text: "Read book" },
    ],
  },
  {
    id: "col-2",
    title: "In progress",
    cards: [{ id: "c-3", text: "Build demo" }],
  },
  {
    id: "col-3",
    title: "Done",
    cards: [{ id: "c-4", text: "Setup project" }],
  },
];

const TrelloBoard: React.FC = () => {
  const [columns, setColumns] = useState<ColumnItem[]>(initial);

  // dataTransfer will contain a JSON string describing dragged card
  const onCardDrop = (
    toColumnId: string,
    toIndex: number | null,
    rawData: string
  ) => {
    try {
      const payload = JSON.parse(rawData) as {
        fromColumnId: string;
        cardId: string;
        fromIndex: number;
      };

      setColumns((prev) => {
        const working = prev.map((c) => ({ ...c, cards: [...c.cards] }));

        const fromCol = working.find((c) => c.id === payload.fromColumnId);
        const toCol = working.find((c) => c.id === toColumnId);
        if (!fromCol || !toCol) return prev;

        const cardIdx = fromCol.cards.findIndex((c) => c.id === payload.cardId);
        if (cardIdx === -1) return prev;

        const [moved] = fromCol.cards.splice(cardIdx, 1);

        if (toIndex === null) {
          // append
          toCol.cards.push(moved);
        } else {
          toCol.cards.splice(toIndex, 0, moved);
        }

        return working;
      });
    } catch (err) {
      // ignore parse errors
      console.warn("invalid drop payload", err);
    }
  };

  return (
    <div className="trello-board">
      {columns.map((col) => (
        <Column key={col.id} column={col} onCardDrop={onCardDrop} />
      ))}
    </div>
  );
};

export default TrelloBoard;
