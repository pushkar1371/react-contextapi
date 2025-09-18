import React from "react";
import { useContext } from "react";
import { useState } from "react";
import userContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
  const submitHandle = (e) => {
    e.preventDefault();
    setUser(username);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
        />{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={submitHandle}> submit</button>
      </form>
    </div>
  );
}

export default Login;
