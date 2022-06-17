import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users.tsx";
import Loader from "../common/preloader/Loader";
import Iuser from "../../types/users/UserInterfase";
import {AppStateType}from "../../redux/reduxStore"
import {
  getCurrentPage,
  getDisabled,
  getLoader,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/select/selectors.ts";

import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
} from "../../redux/redusers/usersReduser.ts";

export interface IusersContainer{
	users:Iuser,
        disable:Array<number>
        totalUsersCount: number
        pageSize: number
        currentPage: number
        onPageChanged:(page:number)=>void,
        unfollow:(userId:number)=>void
        follow:(userId:number)=>void
		requestUsers:(carrentPage:number,pageSize:number)=>void
		loading: boolean
}

const UsersContainer:React.FC<IusersContainer> = (props) => {
  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber:number) => {
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

const mapStateToProps = (state:AppStateType) => {
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
