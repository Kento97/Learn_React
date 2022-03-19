import React, {useState} from 'react';
import Home from "./Home";
import List from "./List"
import Detail from "./Detail";
import {Link, Outlet} from "react-router-dom";



const Index = () => {

    return (
        <>
            <Link to="/home">App</Link>
            <Outlet/>
        </>
    );

}

export default Index;