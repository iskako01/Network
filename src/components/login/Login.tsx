import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import classes from "./Login.module.css";
import { login } from "../../redux/redusers/authReduser";
import { Navigate } from "react-router-dom";
import { IloginFormProps } from "../../types/components/Ilogin";

const LoginForm: FC<IloginFormProps> = ({ login, errorApi, captchaUrl }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    login(data.email, data.password, data.rememberMe);

    setError("errorApi", { message: errorApi });
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
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && (
        <input
          {...register("captcha", {
            required: true,
          })}
        />
      )}
      <div>
        {" "}
        <button type="submit">Login</button>
      </div>
      {errors.errorApi && <div className={classes.error}>{errorApi}</div>}
    </form>
  );
};

const Login = ({ login, isAuth, captchaUrl, errorApi }) => {
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className="login">
      <h2>Login</h2>

      <LoginForm login={login} errorApi={errorApi} captchaUrl={captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    errorApi: state.auth.errorApi,
  };
};

export default connect(mapStateToProps, { login })(Login);
