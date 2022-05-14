import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import Loader from "../common/preloader/Loader";
import { getUsers } from "../../api/api";

import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isLoading,
  buttonDisable,
} from "../../redux/redusers/usersReduser";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isLoading(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.isLoading(false);
    });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.isLoading(true);

    getUsers(p, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.isLoading(false);
    });
  };

  render() {
    return (
      <>
        {this.props.loading ? <Loader /> : null}
        <Users
          users={this.props.users}
          disable={this.props.disable}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          buttonDisable={this.props.buttonDisable}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    loading: state.usersPage.loading,
    disable: state.usersPage.disable,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    buttonDisable: state.usersPage.buttonDisable,
  };
};
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  isLoading,
  buttonDisable,
})(UsersContainer);
