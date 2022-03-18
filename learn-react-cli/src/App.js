import './App.css';
import React, {Component} from "react";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";


export default class App extends Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <h1>Learn React CLI</h1>
                    <Link to="/about">About</Link><br/>
                    <Link to="/home">about</Link>
                    <div>
                        <Routes>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/home" element={<Home/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

