import { useState, type FC } from "react";
import "./fileExplore.css";

const FOLDER = "folder";
const FILE = "file";

interface DataObj {
  id: number;
  type: "folder" | "file";
  name: string;
  children?: DataObj[];
}

const initialData: DataObj[] = [
  {
    id: 101,
    type: FOLDER,
    name: "src",
    children: [
      {
        id: 102,
        type: FILE,
        name: "index.html",
      },
      {
        id: 103,
        type: FILE,
        name: "app.jsx",
      },
      {
        id: 104,
        type: FOLDER,
        name: "components",
        children: [
          {
            id: 105,
            type: FILE,
            name: "Home.tsx",
          },
          {
            id: 106,
            type: FILE,
            name: "Error.tsx",
          },
        ],
      },
    ],
  },
  {
    id: 107,
    type: FOLDER,
    name: "test",
    children: [
      {
        id: 108,
        type: FILE,
        name: "home.test.spx",
      },
    ],
  },
];

const FileExplore: FC = () => {
  const [active, setActive] = useState<Record<string, string>>({});

  const handleFolderClick = (folderId: number) => {
    setActive({ ...active, [folderId]: !active[folderId] });
  };

  const Folder: FC<{ item: DataObj }> = ({ item }) => {
    const isActive = active[item.id];
    return (
      <div className="folder-container" key={item.id}>
        <div className="folder" onClick={() => handleFolderClick(item.id)}>
          📁 {item.name}
        </div>

        {item.children?.map((child) => (
          <div
            style={{
              maxHeight: isActive ? "500px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.5s",
            }}
            key={child.id}
          >
            {child.type === FOLDER ? (
              <Folder item={child} />
            ) : (
              <div className="file">📄 {child.name}</div>
            )}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div id="fe">
      {initialData.map((item: DataObj) => {
        return (
          <div key={item.id}>
            <Folder item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default FileExplore;
