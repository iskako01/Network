import React from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import classes from "./Login.module.css";
import { login } from "../../redux/redusers/authReduser";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("email", { required: true, maxLength: 20 })} />
      </div>
      {errors.email && (
        <span className={classes.error}>Email is required.</span>
      )}
      <div>
        <input type="password" {...register("password", { required: true })} />
      </div>
      {errors.password && (
        <span className={classes.error}>Password is required.</span>
      )}
      <div>
        Remember me
        <input type="checkbox" {...register("rememberMe")} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default connect(null, { login })(Login);
