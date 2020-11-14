import React, { useState } from "react";
import firebase from "firebase";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import db from "./firebase";
import { useSelector } from "react-redux";

const InputField: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const roomId = useSelector((state: any) => state.user.roomId);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId?.room).collection("messages").add({
      message: message,
      name: "Michael",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
