// import redux from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer.js";

//创建时候需要传入reducer
const store = createStore(reducer)

export default store;