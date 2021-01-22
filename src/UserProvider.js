import React from "react";
import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
  const user = {
    id: 123,
    name: "Dan",
    email: "dan@fake.com",
  };
  return (
    <>
      <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    </>
  );
};
