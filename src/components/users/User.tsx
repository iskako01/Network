/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/noname.jpeg";
import { NavLink } from "react-router-dom";
import {Iuser} from "../../types/redusers/users/UserInterfase"


export interface IuserProps{
	user:Iuser,
	unfollow:(userId:number)=>void,
	follow:(userId:number)=>void,
	disable:Array<number>
}

const User:React.FC<IuserProps> = ({user,unfollow,follow,disable}) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.follow}>
          <div>
            <NavLink to={"./../profile/" + user.id}>
              <img
                src={
                  user.photos.small !== null
                    ? user.photos.small
                    : userPhoto
                }
                className={classes.avatar}
              />
            </NavLink>
          </div>

          <div className={classes.btn}>
            {user.followed ? (
              <button
                disabled={disable.some((id:number) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={disable.some((id:number) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>

        <div className={classes.info}>
          <div className="">
            <div className="">{user.name}</div>
            <div className="">{user.status}</div>
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
