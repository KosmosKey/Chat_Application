import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./FieldEnter.scss";
import PersonIcon from "@material-ui/icons/Person";
import TitleIcon from "@material-ui/icons/Title";
import { useDispatch } from "react-redux";
import { login } from "./redux/actions";

type targets = {
  username: "";
  descrption: "";
};

const FieldEnter: React.FC = () => {
  const dispatch = useDispatch();
  const [targets, setTargets] = useState<targets>({
    username: "",
    descrption: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      login({ username: targets.username, description: targets.descrption })
    );
  };

  const onChange = (e: any) => {
    setTargets({ ...targets, [e.target.name]: e.target.value });
  };

  return (
    <div className="FieldEnter">
      <form onSubmit={submit} className="FiedlEnterContainer">
        <h1>Chat Application</h1>
        <label htmlFor="name">Your Name</label>
        <div className="FieldEnter__InputOne">
          <PersonIcon />
          <input
            onChange={onChange}
            value={targets.username}
            name="username"
            type="text"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <label htmlFor="role">Your Description Role</label>
        <div className="FieldEnter__InputOne">
          <TitleIcon />
          <input
            onChange={onChange}
            value={targets.descrption}
            name="descrption"
            type="text"
            id="role"
            placeholder="Enter Your Description"
          />
        </div>
        <Button
          disabled={!targets.username || !targets.descrption}
          type="submit"
          className={`${
            !targets.username || !targets.descrption ? "button__disabled" : ""
          }`}
        >
          Submit
        </Button>
      </form>
      <div className="overlay"></div>
    </div>
  );
};

export default FieldEnter;
