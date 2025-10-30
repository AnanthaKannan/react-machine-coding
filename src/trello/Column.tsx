import React, { useState, useCallback } from "react";
import Card from "./Card";
import type { ColumnItem } from "./TrelloBoard";

interface Props {
  column: ColumnItem;
  onCardDrop: (
    toColumnId: string,
    toIndex: number | null,
    rawData: string
  ) => void;
}

const Column: React.FC<Props> = ({ column, onCardDrop }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      if (!isDragOver) setIsDragOver(true);
    },
    [isDragOver]
  );

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      setIsDragOver(false);
      onCardDrop(column.id, null, data);
    },
    [column.id, onCardDrop]
  );

  return (
    <div
      className={`trello-column ${isDragOver ? "drag-over" : ""}`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="trello-column-header">{column.title}</div>
      <div className="trello-column-body">
        {column.cards.map((card, idx) => (
          <Card key={card.id} card={card} columnId={column.id} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Column;
