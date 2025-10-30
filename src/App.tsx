import React from "react";
// import SearchBox from "./searchbox/SearchBox";
import TrelloBoard from "./trello/TrelloBoard";
import DragDrop from "./practice/dragDrop/dragDrop";
import PercentageLoader from "./practice/loader/PercentageLoad";

const App: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <PercentageLoader />
      {/* <DragDrop /> */}
      {/* <TrelloBoard /> */}
    </div>
  );
};

export default App;
