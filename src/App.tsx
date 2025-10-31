import React from "react";
// import SearchBox from "./searchbox/SearchBox";
import TrelloBoard from "./trello/TrelloBoard";
import DragDrop from "./practice/dragDrop/dragDrop";
import PercentageLoader from "./practice/loader/percentageLoader/PercentageLoad";
import CircleLoader from "./practice/loader/circleLoader/CircleLoader";
import FileExplore from "./practice/fileExplor/FileExplore";
import Tooltip from "./practice/tooltip/Tooltip";

const App: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <Tooltip />
      {/* <CircleLoader /> */}
      {/* <PercentageLoader /> */}
      {/* <DragDrop /> */}
      {/* <TrelloBoard /> */}
    </div>
  );
};

export default App;
