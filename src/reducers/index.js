import {combineReducers} from "redux";
import formData from "./formReducers.js";

const rootReducer = combineReducers({
	formLock: formData
});

export default rootReducer;

