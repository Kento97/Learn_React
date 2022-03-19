import React, {useState} from 'react'
import './App.css'
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Router from "./router/index.jsx";
import {Outlet} from "react-router-dom";

import Index from "../src/pages/router-demo/Index";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Index/>
        </div>
    )
}

export default App
