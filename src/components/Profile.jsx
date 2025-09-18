import React from "react";
import { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);
  if (!user) return <h1> welcome</h1>;
  return (
    <div>
      <h1>welcome {user}</h1>
    </div>
  );
}

export default Profile;
