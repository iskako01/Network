import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../common/preloader/Loader";
import {
  getCurrentPage,
  getDisabled,
  getLoader,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/select/selectors";

import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
} from "../../redux/redusers/usersReduser";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    loading: getLoader(state),
    disable: getDisabled(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
  };
};
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
})(UsersContainer);
