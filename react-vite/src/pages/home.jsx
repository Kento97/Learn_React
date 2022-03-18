import React, {useState, useEffect} from 'react';
import store from "../store";
import {ADD_NUMBER} from "../store/actionCreators";

const Home = () => {
    const [state, setState] = useState({counter: store.getState().counter})
    useEffect(() => {
        store.subscribe(() => {
            setState({
                counter: store.getState().counter
            })
        })
    }, [])
    const {counter} = state
    const add = () => {
        store.dispatch(ADD_NUMBER(1))
    }
    return (
        <div>
            <h2>Home</h2>
            <div>当前计数：{counter}</div>
            <button onClick={add}>+1</button>
        </div>
    );

}

export default Home;