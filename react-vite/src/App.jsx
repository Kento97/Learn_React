import {useState} from 'react'
import './App.css'
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Home/><hr/>
            <About/>
        </div>
    )
}

export default App
