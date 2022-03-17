
import './App.css';
import React,{Component} from "react";
import Hello from "./components/Hello";

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <Hello name='child-in-props'/>
            </div>
        )
    }
}

