/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/noname.jpeg";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              onClick={() => props.onPageChanged(p)}
              className={props.currentPage === p ? classes.selectedPage : ""}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div className={classes.container} key={u.id}>
          <div className={classes.follow}>
            <div>
              <NavLink to={"./../profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={classes.avatar}
                />
              </NavLink>
            </div>

            <div className={classes.btn}>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </div>

          <div className={classes.info}>
            <div className="">
              <div className="">{u.name}</div>
              <div className="">{u.status}</div>
            </div>

            <div className="">
              <div className="">{"u.location.country"}</div>
              <div className="">{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
