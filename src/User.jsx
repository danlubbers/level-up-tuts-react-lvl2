import React from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <>
          <h1>User Info:</h1>
          <h1>{context.name}</h1>
          <h2>{context.email}</h2>
        </>
      )}
    </UserContext.Consumer>
  );
};
