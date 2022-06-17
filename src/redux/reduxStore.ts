import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import dialogsReduser from "./redusers/dialogsReduser.ts";
import profileReduser from "./redusers/profileReduser.ts";
import usersReduser from "./redusers/usersReduser.ts";
import authReduser from "./redusers/authReduser.ts";
import appReduser from "./redusers/appReduser.ts";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
  app: appReduser,
});

type RedusersType = typeof redusers;
export type AppStateType = ReturnType<RedusersType>;

let store = createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
