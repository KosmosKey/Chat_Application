import React from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatTabs from "./ChatTabs";

const ChatBody: React.FC = () => {
  return (
    <div className="ChatApplication">
      <div className="ChatApplication__Sidebar">
        <div className="ChatApplication__SideBarHeader">
          <div className="ChatApplication__Header">
            <Avatar className="ChatApplication__Avatar">H</Avatar>
            <h2>Jonathan Smith</h2>
          </div>
        </div>
        <div className="ChatApplication__Input">
          <SearchIcon className="ChatApplication__SearchIcon" />
          <input type="text" placeholder="Search People" />
        </div>
        <div className="ChatApplication__BodyChat">
          <ChatTabs />
        </div>
      </div>
      <div className="ChatApplication__ChatBody">
        <h1>ChatBody</h1>
      </div>
    </div>
  );
};

export default ChatBody;
