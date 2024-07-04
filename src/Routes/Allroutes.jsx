import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import NoPage from '../Pages/NoPage';
import Navbar from '../Pages/Navbar';
const Allroutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<NoPage />}></Route>
                {/* <Route path="/nav" element={<Navbar />}></Route> */}
               

            </Routes>

        </div>
    )
}

export default Allroutes
