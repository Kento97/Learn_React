import {useState} from 'react';
import App from "../pages/router-demo/Index";
import List from "../pages/router-demo/List";
import Detail from "../pages/router-demo/Detail";
import Home from "../pages/router-demo/Home";

import {BrowserRouter, Routes, Route} from "react-router-dom";

const myRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/list' element={<List/>}/>
                        <Route path='/detail' element={<Detail/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default myRouter;