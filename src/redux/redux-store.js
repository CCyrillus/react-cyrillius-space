import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogReducer } from "./dialog-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogReducer,
	sidebarPage: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
