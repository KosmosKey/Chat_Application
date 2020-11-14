import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const InputField = () => {
  return (
    <div className="InputField">
      <div className="InputFields__Container">
        <input type="text" placeholder="Write a message..." />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputField;
