import React, {useState, useEffect} from 'react';
import store from "../store";
import {SUB_NUMBER} from "../store/actionCreators";

const About = () => {
    const [state, setState] = useState({counter: store.getState().counter})
    useEffect(() => {
        store.subscribe(() => {
            setState({
                counter: store.getState().counter
            })
        })
    }, [])
    const {counter}=state
    const sub = () => {
        store.dispatch(SUB_NUMBER(1))
    }
    return (
        <div>
            <h2>About</h2>
            <div>当前计数：{counter}</div>
            <button onClick={sub}>-1</button>
        </div>
    );

}

export default About;