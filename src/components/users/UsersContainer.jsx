import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import Loader from "../common/preloader/Loader";

import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isLoading,
} from "../../redux/redusers/usersReduser";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.isLoading(false);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.isLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.isLoading(false);
      });
  };

  render() {
    return (
      <>
        {this.props.loading ? <Loader /> : null}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    loading: state.usersPage.loading,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isLoading,
})(UsersContainer);
