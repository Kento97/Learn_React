import {useState} from 'react'
import './App.css'
import {useNavigate, Routes} from "react-router-dom";
import UseState from "@/learn-hooks/useState";
import UseEffect from "@/learn-hooks/useEffect";
import UseContext from "@/learn-hooks/useContext";


function App() {

    return (
        <div className="App">
           <UseContext></UseContext>
        </div>
    )
}

export default App
