/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/noname.jpeg";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div className={classes.container} key={u.id}>
            <div className={classes.follow}>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={classes.avatar}
                />
              </div>

              <div className={classes.btn}>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
  }
}

export default Users;
