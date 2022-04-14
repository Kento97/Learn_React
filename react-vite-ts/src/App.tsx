import {useState} from 'react'
import './App.css'
import {useNavigate, Routes} from "react-router-dom";
import MutateArray from "@/learn-hooks/MutateArray";
import MutateObject from "@/learn-hooks/MutateObject";


function App() {

    return (
        <div className="App">
            <MutateArray/>
            <MutateObject/>
        </div>
    )
}

export default App
