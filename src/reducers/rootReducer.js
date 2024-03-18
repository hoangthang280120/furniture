import { combineReducers } from "redux";
import homepageReducer from "./homepageReducer";
import headerReducer from "./headerReducer";

const rootReducer =combineReducers({
    homepageReducer,
    headerReducer
})
export default rootReducer