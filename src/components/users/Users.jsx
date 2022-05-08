import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        photoUrl:
          "https://miro.medium.com/max/2560/1*Zea8TZCxKyLsIuNCjPv5UQ.jpeg",
        fullname: "Alisher",
        status: "I like it",
        location: { city: "Almaty", country: "Kazakchstan" },
      },
      {
        id: 2,
        followed: true,
        photoUrl:
          "https://i.pinimg.com/originals/35/d9/ea/35d9eaf49c5a954b62e5930f56c452b5.jpg",
        fullname: "Toshka",
        status: "Tbilisi",
        location: { city: "Almaty", country: "Kazakchstan" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div className={classes.container} key={u.id}>
          <div className={classes.follow}>
            <div>
              <img src={u.photoUrl} className={classes.avatar} />
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
              <div className="">{u.fullname}</div>
              <div className="">{u.status}</div>
            </div>

            <div className="">
              <div className="">{u.location.country}</div>
              <div className="">{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
