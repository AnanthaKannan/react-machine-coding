import React from "react";
import type { CardItem } from "./TrelloBoard";

interface Props {
  card: CardItem;
  columnId: string;
  index: number;
}

const Card: React.FC<Props> = ({ card, columnId, index }) => {
  const handleDragStart = (e: React.DragEvent) => {
    const payload = JSON.stringify({
      fromColumnId: columnId,
      cardId: card.id,
      fromIndex: index,
    });
    e.dataTransfer.setData("text/plain", payload);
    e.dataTransfer.effectAllowed = "move";
    // add dragging class to provide visual feedback
    (e.currentTarget as HTMLElement).classList.add("dragging");
  };

  const handleDragEnd = (e: React.DragEvent) => {
    (e.currentTarget as HTMLElement).classList.remove("dragging");
  };

  return (
    <div
      className="trello-card"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {card.text}
    </div>
  );
};

export default Card;
