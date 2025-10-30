import { useCallback, useMemo, useState, useRef } from "react";
import type { FC, DragEvent } from "react";
import style from "./dragdrop.module.css";

interface Task {
  name: string;
  id: number;
}

interface Column {
  name: string;
  id: number;
  task: Task[];
}

const data: Column[] = [
  {
    name: "to do",
    id: 1,
    task: [],
  },
  {
    name: "in progress",
    id: 2,
    task: [
      { id: 100, name: "Read book" },
      { id: 101, name: "Play game" },
      { id: 102, name: "Walk 5Km" },
    ],
  },
  {
    id: 3,
    name: "done",
    task: [],
  },
];

const DragDrop: FC = () => {
  const [columns, setColumns] = useState<Column[]>(data);
  const colRef = useRef({ taskId: -1, colId: -1 });

  const handleDrop = (targetColId: number) => {
    // console.log("targetColId", targetColId);
    // console.log("ref", colRef);
    const currentColId = colRef.current.colId;
    const taskId = colRef.current.taskId;

    // skip if user drop the same column
    if (currentColId === targetColId) return;

    // remove task from current column
    const currentColIdx = columns.findIndex((col) => col.id === currentColId);
    const targetColIdx = columns.findIndex((col) => col.id === targetColId);

    const taksObj = columns[currentColIdx].task.find(
      (item) => item.id === taskId
    );
    const restTask = columns[currentColIdx].task.filter(
      (item) => item.id !== taskId
    );
    columns[currentColIdx].task = [...restTask];
    columns[targetColIdx].task.push(taksObj!);

    setColumns([...columns]);
    // add task into new column
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleClick = (taskId: number, colId: number) => {
    colRef.current = { taskId, colId };
  };

  return (
    <div className={style.container}>
      {columns.map((item) => {
        return (
          <div
            key={item.id}
            className={style.col}
            onDrop={() => handleDrop(item.id)}
            onDragOver={handleDragOver}
          >
            <div className={style.head}>{item.name?.toUpperCase()}</div>
            {item.task.map((task) => {
              return (
                <div
                  key={task.id}
                  onDragStart={() => handleClick(task.id, item.id)}
                  className={style.todo}
                  draggable
                >
                  {task.name}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DragDrop;
