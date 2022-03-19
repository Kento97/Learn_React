import {useState} from 'react';
import App from "../App.jsx"
import List from "../pages/router-demo/List";
import Detail from "../pages/router-demo/Detail";
import Home from "../pages/router-demo/Home";
import NoMatch from "../pages/router-demo/404";

import {BrowserRouter, Routes, Route} from "react-router-dom";

const myRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path='home' element={<Home/>}/>
                        <Route path='list' element={<List/>}/>
                        <Route path='detail' element={<Detail/>}/>
                        <Route path='*' element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default myRouter;