import { Avatar } from "@material-ui/core";
import React from "react";

interface Props {
  name: any;
}

const MessagesIcons: React.FC<Props> = ({ name }) => {
  return (
    <div className="MessagesIcons">
      <Avatar className="MessagesIcons__Avatar">H</Avatar>
      <div className="MessagesIcons__Message">
        <p>{name?.message}</p>
      </div>
    </div>
  );
};

export default MessagesIcons;
