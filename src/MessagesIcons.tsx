import React from "react";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

interface Props {
  name: any;
}

const MessagesIcons: React.FC<Props> = ({ name }) => {
  const user = useSelector((state: any) => state.user.user.username);
  return (
    <div className={`MessagesIcons ${name.name === user && "active"}`}>
      <Avatar className="MessagesIcons__Avatar">
        {name?.message?.charAt(0)}
      </Avatar>
      <div className="MessagesIcons__Title">
        <p className="MessagesIcons__Name">{name.name}:</p>
        <div className="MessagesIcons__Message">
          <p>{name?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default MessagesIcons;
