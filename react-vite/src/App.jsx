import React, {useState} from 'react'
import './App.css'
import {Link, Outlet, useNavigate} from "react-router-dom";


function App() {
    const [count, setCount] = useState(0)
    // const location = useLocation();
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/detail`, {
            state: {
                name: "张三"
            }
        })
    }
    return (
        <div className="App"
             style={{fontSize: "40px", fontFamily: "JetBrains Mono", display: "flex", flexDirection: "column"}}>
            <Link to="/home">App</Link>
            <Link to="/detail">detail</Link>
            <Link to="/list">list</Link>
            <Link to="/error">404</Link>
            <button onClick={goDetail}>跳转详情页
            </button>
            <div style={{
                borderRadius: "10px",
                height: "100px",
                lineHeight: "100px",
                textAlign: "center",
                background: "darkgrey",
                marginTop: "40px"
            }}>
                <Outlet/>
            </div>

        </div>
    )
}

export default App
