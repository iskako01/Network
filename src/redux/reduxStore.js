import { createStore, combineReducers } from "redux";
import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";
import usersReduser from "./redusers/usersReduser";
import authReduser from "./redusers/authReduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
});

let store = createStore(redusers);

export default store;
