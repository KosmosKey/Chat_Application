import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatTabs from "./ChatTabs";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Header from "./Header";
import InputField from "./InputField";
import MessagesIcons from "./MessagesIcons";

const ChatBody: React.FC = () => {
  return (
    <div className="ChatApplication">
      <div className="ChatApplication__Sidebar">
        <div className="ChatApplication__SideBarHeader">
          <div className="ChatApplication__Header">
            <div className="ChatApplication__Profile">
              <Avatar className="ChatApplication__Avatar">H</Avatar>
              <div className="ChatApplication__Name">
                <h2>Jonathan Smith</h2>
                <p>Senior Front End Developer</p>
              </div>
            </div>
            <IconButton className="ChatApplication__Button">
              <CreateOutlinedIcon className="ChatApplication__EditIcon" />
            </IconButton>
          </div>
        </div>
        <div className="ChatApplication__Input">
          <SearchIcon className="ChatApplication__SearchIcon" />
          <input type="text" placeholder="Search People" />
        </div>
        <div className="ChatApplication__BodyChat">
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
          <ChatTabs />
        </div>
      </div>
      <div className="ChatApplication__ChatBody">
        <Header />
        <div className="MessageBody">
          <MessagesIcons />
          <MessagesIcons />
          <MessagesIcons />
          <MessagesIcons />
          <MessagesIcons />
          <MessagesIcons />
          <MessagesIcons />
          <MessagesIcons />
        </div>
        <InputField />
      </div>
    </div>
  );
};

export default ChatBody;
