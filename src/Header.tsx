import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <div className="Header__NameAvatar">
        <Avatar className="Header__Avatar">H</Avatar>
        <h1>Jonathan Smith</h1>
      </div>
      <div className="Header__Icons">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
