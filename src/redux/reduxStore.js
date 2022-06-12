import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";
import usersReduser from "./redusers/usersReduser";
import authReduser from "./redusers/authReduser";
import appReduser from "./redusers/appReduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
  app: appReduser,
});

let store = createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
