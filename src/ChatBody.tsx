import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { Avatar, IconButton } from "@material-ui/core";
import ChatTabs from "./ChatTabs";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputField from "./InputField";
import MessagesIcons from "./MessagesIcons";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import CheckIcon from "@material-ui/icons/Check";
import { login } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

type targets = {
  username: string;
  description: string;
};

const ChatBody: React.FC = () => {
  const [messages, setMessages] = useState<any>([]);
  const [roomMessages, setRoomMessages] = useState<any>(null);
  const [room, setRoom] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingRoom, setLoadingRoom] = useState<boolean>(true);
  const [boleanInput, setBoleanInput] = useState<boolean>(false);
  const [heart, setHeart] = useState(false);
  const [notification, setNotification] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [inputSearch, setInputSearch] = useState<string>("");

  const [targets, setTargets] = useState<targets>({
    username: "",
    description: "",
  });

  const checkInput = inputSearch.length < 1;

  const user = useSelector((state: any) => state.user.user);
  const roomName = useSelector((state: any) => state.user.roomName);
  const roomId = useSelector((state: any) => state.user.roomId);

  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("rooms")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setLoading(false);
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            messages: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setLoadingRoom(false);
          setRoomMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              messages: doc.data(),
            }))
          );
        });
    }
  }, [roomId, checkInput]);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (room.length === 0) {
      return alert("Don't leave the room blank!");
    }

    db.collection("rooms").add({
      roomName: room,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargets({ ...targets, [e.target.name]: e.target.value });
  };

  const setBoleanInputFunction = () => {
    setBoleanInput(!boleanInput);
    setTargets({
      ...targets,
      username: user.username,
      description: user.description,
    });
  };

  const updateUsersInformation = () => {
    setBoleanInput(!boleanInput);

    if (!targets.description || !targets.username) {
      alert("Please do not leave the field blank");
    } else {
      dispatch(
        login({ username: targets.username, description: targets.description })
      );
    }
  };

  const heartToggle = () => {
    setHeart(!heart);
  };

  const notificationToggle = () => {
    setNotification(!notification);
  };

  const inputSearchFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);

    setRoomMessages(
      roomMessages.filter(
        (item: any) =>
          item.messages.message.toLowerCase().indexOf(e.target.value) > -1 ||
          item.messages.message.toUpperCase().indexOf(e.target.value) > -1
      )
    );
  };

  console.log(messages);
  return (
    <div className="ChatApplication">
      <div className="ChatApplication__Sidebar">
        <div className="ChatApplication__SideBarHeader">
          <div className="ChatApplication__Header">
            <div className="ChatApplication__Profile">
              <Avatar className="ChatApplication__Avatar">
                {user?.username.charAt(0)}
              </Avatar>
              {boleanInput ? (
                <div className="ChatApplications__Inputs">
                  <input
                    name="username"
                    type="text"
                    onChange={onChangeInput}
                    value={targets.username}
                    placeholder="Enter a new name"
                  />
                  <input
                    name="description"
                    type="text"
                    onChange={onChangeInput}
                    value={targets.description}
                    placeholder="Enter a new name"
                  />
                </div>
              ) : (
                <div className="ChatApplication__Name">
                  <h2>{user?.username}</h2>
                  <p>{user?.description}</p>
                </div>
              )}
            </div>
            {boleanInput ? (
              <IconButton
                className="ChatApplication__Button"
                onClick={updateUsersInformation}
              >
                <CheckIcon className="ChatApplication__EditIcon" />
              </IconButton>
            ) : (
              <IconButton
                className="ChatApplication__Button"
                onClick={setBoleanInputFunction}
              >
                <CreateOutlinedIcon className="ChatApplication__EditIcon" />
              </IconButton>
            )}
          </div>
        </div>
        <form onSubmit={submitForm} className="ChatApplication__Input">
          <input
            type="text"
            value={room}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoom(e.target.value)
            }
            placeholder="Add Rooms"
          />
          <IconButton type="submit">
            <AddIcon className="ChatApplication__SearchIcon" />
          </IconButton>
        </form>
        <div className="ChatApplication__BodyChat">
          {loading ? (
            <h3 className="ChatApplication__H3Loading">Loading...</h3>
          ) : (
            messages?.map((item: any) => (
              <ChatTabs id={item.id} key={item.id} name={item.messages} />
            ))
          )}
        </div>
      </div>
      <div className="ChatApplication__ChatBody">
        {!roomMessages ? (
          <h1 className="ChatApplication__NoRooms">No Rooms Selected</h1>
        ) : (
          <>
            {loadingRoom ? (
              <h1 className="ChatApplication__NoRooms">Loading...</h1>
            ) : (
              <>
                <div className="Header">
                  <div className="Header__NameAvatar">
                    <Avatar className="Header__Avatar">
                      {roomName.charAt(0)}
                    </Avatar>
                    <h1>{roomName}</h1>
                  </div>

                  <div className="Header__Icons">
                    <input
                      type="text"
                      className={`Header__InputField ${
                        inputActive && "active"
                      }`}
                      placeholder="Search for Message"
                      value={inputSearch}
                      onChange={inputSearchFunction}
                    />
                    <IconButton onClick={() => setInputActive(!inputActive)}>
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
                <div className="MessageBody">
                  {roomMessages.length === 0 ? (
                    <h1 className="MessagesBody__NoRoom">
                      No Messages in this room
                    </h1>
                  ) : (
                    roomMessages.map((item: any) => (
                      <MessagesIcons key={item.id} name={item.messages} />
                    ))
                  )}
                </div>
                <InputField />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBody;
