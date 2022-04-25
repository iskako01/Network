import { createStore, combineReducers } from "redux";
import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
});

let store = createStore(redusers);

export default store;
