import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import ChatBody from "./ChatBody";
import FieldEnter from "./FieldEnter";

const App: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  return (
    <div className="App">
      {!user && <FieldEnter />}
      <ChatBody />
    </div>
  );
};

export default App;
