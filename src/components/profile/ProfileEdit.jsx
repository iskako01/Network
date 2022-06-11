import React from "react";
import classes from "./Profile.module.css";
import { useForm } from "react-hook-form";
// import Contacts from "."
const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle} : {contactValue}
    </div>
  );
};

const ProfileEdit = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  return (
    <form className={classes.info} onSubmit={handleSubmit(props.onSubmit)}>
      <div className={classes.title}>
        <div>Full name</div>
        <input
          type="text"
          {...register("fullName", { required: false })}
          defaultValue={props.profile.fullName}
        />
      </div>

      <div>
        Looking for a job:
        <input
          {...register("lookingForAJob", { required: false })}
          type="checkbox"
          name="lookingForAJob"
          defaultValue={props.profile.lookingForAJob}
        />
      </div>

      <div>
        <div>My professional skills :</div>
        <textarea
          defaultValue={props.profile.lookingForAJobDescription}
          {...register("lookingForAJobDescription", { required: false })}
        />
      </div>
      <div className={classes.aboutMe}>
        <div>About me</div>
        <textarea
          {...register("aboutMe", { required: false })}
          defaultValue={props.profile.aboutMe}
        />
      </div>

      {/* Contacts */}
      <div className={classes.contacts}>
        <div>
          <div>
            Contacts:
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <div key={key}>
                  <div>{key}:</div>
                  <input
                    type="text"
                    {...register("contacts." + key, { required: false })}
                    defaultValue={props.profile.contacts[key]}
                  />
                
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button type="submit">save</button>
    </form>
  );
};
export default ProfileEdit;
