import React from "react";
import "./ChatTabs.scss";
import { Avatar } from "@material-ui/core";

const ChatTabs: React.FC = () => {
  return (
    <div className="ChatTabs">
      <div className="ChatTabs__TitleAvatar">
        <Avatar>H</Avatar>
        <div className="ChatTabs__Name">
          <h2>Jonathan Smith</h2>
          <p>Hello How is it going everyone</p>
        </div>
      </div>
      <div className="ChatTabs__TimeStamps">
        <span>15:35 AM</span>
      </div>
    </div>
  );
};

export default ChatTabs;
