import React from "react";
import "./ChatTabs.scss";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { roomId } from "./redux/actions";

interface Props {
  name: any;
  id: string;
}

const ChatTabs: React.FC<Props> = ({ name, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="ChatTabs"
      onClick={() => dispatch(roomId({ room: id, name: name.roomName }))}
    >
      <div className="ChatTabs__TitleAvatar">
        <Avatar className="ChatTabs__Avatar">
          {name?.roomName?.charAt(0)}
        </Avatar>
        <div className="ChatTabs__Name">
          <h2>{name?.roomName}</h2>
        </div>
      </div>
      <div className="ChatTabs__TimeStamps">
        <span>{name?.timestamp?.toDate().toUTCString()}</span>
      </div>
    </div>
  );
};

export default ChatTabs;
