import React from "react";
import "./App.scss";
import ChatBody from "./ChatBody";
import FieldEnter from "./FieldEnter";

const App: React.FC = () => {
  return (
    <div className="App">
      <FieldEnter />
      <ChatBody />
    </div>
  );
};

export default App;
