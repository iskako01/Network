/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/noname.jpeg";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.follow}>
          <div>
            <NavLink to={"./../profile/" + props.user.id}>
              <img
                src={
                  props.user.photos.small !== null
                    ? props.user.photos.small
                    : userPhoto
                }
                className={classes.avatar}
              />
            </NavLink>
          </div>

          <div className={classes.btn}>
            {props.user.followed ? (
              <button
                disabled={props.disable.some((id) => id === props.user.id)}
                onClick={() => {
                  props.unfollow(props.user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.disable.some((id) => id === props.user.id)}
                onClick={() => {
                  props.follow(props.user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>

        <div className={classes.info}>
          <div className="">
            <div className="">{props.user.name}</div>
            <div className="">{props.user.status}</div>
          </div>

          <div className="">
            <div className="">{"props.user.location.country"}</div>
            <div className="">{"props.user.location.city"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
