import {createStore} from "redux";
import reducer from "./reducer";
//仓库的数据来自 reducer
const store = createStore(reducer)

export default store