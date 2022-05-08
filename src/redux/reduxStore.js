import { createStore, combineReducers } from "redux";
import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";
import usersReduser from "./redusers/usersReduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
});

let store = createStore(redusers);

export default store;
