import {Provider} from "react-redux";
import store from "../store2";
import Child from "./Child.jsx";


const Father = () => {

    return (
        <>
            <Provider store={store}>
                <div>我是父亲</div>
                <Child/>
            </Provider>
        </>
    );

}

export default Father;