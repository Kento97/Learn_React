import {useState} from 'react'
import './App.css'
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Router from "./router/index.jsx";
import {Outlet} from "react-router-dom";




function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Outlet/>
        </div>
    )
}

export default App
