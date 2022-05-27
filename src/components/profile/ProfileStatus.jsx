import React from "react";
import { useState } from "react";

const ProfileStatus = (props) => {
  //   state = {
  //     editMode: false,
  //     status: this.props.status,
  //   };

  //   activateEditMode = () => {
  //     this.setState({ editMode: true });
  //   };
  //   deactivateEditMode = () => {
  //     this.setState({ editMode: false });
  //     this.props.updateStatusProfile(this.state.status);
  //   };
  //   onStatusChange = (e) => {
  //     this.setState({ status: e.currentTarget.value });
  //   };
  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.status !== this.props.status) {
  //       this.setState({ status: this.props.status });
  //     }
  //   }
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatusProfile(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className="">
      {!editMode && (
        <div className="">
          <span onDoubleClick={activateEditMode}>
            {props.status || "Type status"}
          </span>
        </div>
      )}

      {editMode && (
        <div className="">
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            type="text"
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
