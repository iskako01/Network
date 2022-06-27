/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import { Iuser } from "../../types/redusers/users/UserInterfase";

export interface IusersProps {
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (page: number) => void;
  currentPage: number;
  users: Iuser[];
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  disable: Array<number>;
}

const Users: React.FC<IusersProps> = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />

      {users.map((u) => (
        <User {...props} user={u} key={u.id} />
      ))}
    </div>
  );
};

export default Users;
