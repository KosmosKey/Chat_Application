import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import db from "./firebase";
import { useSelector } from "react-redux";

const InputField: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const roomId = useSelector((state: any) => state.user.roomId);
  const user = useSelector((state: any) => state.user.user);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: message,
      name: user.username,
    });
    setMessage("");
  };

  return (
    <div className="InputField">
      <form onSubmit={submit} className="InputFields__Container">
        <input
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          type="text"
          placeholder="Write a message..."
        />
        <IconButton type="submit">
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default InputField;
