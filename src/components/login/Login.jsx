import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import classes from "./Login.module.css";
import { login } from "../../redux/redusers/authReduser";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe);

    setError("errorApi", { message: props.errorApi });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("email", {
            required: true,
            maxLength: 20,
          })}
        />
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
      {errors.errorApi && <div className={classes.error}>{props.errorApi}</div>}
    </form>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className="login">
      <h2>Login</h2>

      <LoginForm {...props} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    errorApi: state.auth.errorApi,
  };
};

export default connect(mapStateToProps, { login })(Login);
