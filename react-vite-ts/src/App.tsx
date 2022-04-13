import {useState} from 'react'
import './App.css'
import {useNavigate, Routes} from "react-router-dom";
import MutateArray from "@/learn-hooks/MutateArray";


function App() {

    return (
        <div className="App">
            <MutateArray/>
        </div>
    )
}

export default App
