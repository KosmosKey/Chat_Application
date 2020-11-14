import { Button } from "@material-ui/core";
import React from "react";
import "./FieldEnter.scss";
import PersonIcon from "@material-ui/icons/Person";

const FieldEnter: React.FC = () => {
  return (
    <div className="FieldEnter">
      <div className="FiedlEnterContainer">
        <h1>Enter your field</h1>
        <label htmlFor="name">Your Name</label>
        <div className="FieldEnter__InputOne">
          <PersonIcon />
          <input type="text" id="name" placeholder="Enter Your Name" />
        </div>
        <label htmlFor="role">Your Description Role</label>
        <input id="role" type="text" placeholder="Who are you?" />
        <Button>SUBMIT</Button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default FieldEnter;
