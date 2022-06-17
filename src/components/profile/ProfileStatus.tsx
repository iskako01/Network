import React, { useEffect, useState } from "react";


interface IprofileStatus{
	status: string;
	updateStatusProfile:(status:string)=>void

}
interface IStateStatus{
	editMode: boolean;
	status: string;
	setEditMode:(value:boolean)=>void

}


const ProfileStatus:React.FC<IprofileStatus> = (props) => {
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let [editMode, setEditMode] = useState<boolean>(false);
  let [status, setStatus] = useState<string>(props.status);

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
