import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header: React.FC = () => {
  const [heart, setHeart] = useState(false);
  const [notification, setNotification] = useState(false);

  const heartToggle = () => {
    setHeart(!heart);
  };

  const notificationToggle = () => {
    setNotification(!notification);
  };

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
        <IconButton onClick={heartToggle}>
          {heart ? (
            <FavoriteIcon className="HeartFavorite" />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={notificationToggle}>
          {notification ? (
            <NotificationsIcon className="NotifacationFavourite" />
          ) : (
            <NotificationsOutlinedIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
