/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      <Paginator {...props} />

      {props.users.map((u) => (
        <User {...props} user={u} key={u.id} />
      ))}
    </div>
  );
};

export default Users;
