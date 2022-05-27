import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

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
