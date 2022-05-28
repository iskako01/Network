import React, { useEffect } from "react";
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

const UsersContainer = (props) => {
  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    props.requestUsers(pageNumber, props.pageSize);
  };

  return (
    <>
      {props.loading ? <Loader /> : null}
      <Users
        users={props.users}
        disable={props.disable}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        unfollow={props.unfollow}
        follow={props.follow}
      />
    </>
  );
};

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
