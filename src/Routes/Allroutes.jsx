import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import NoPage from '../Pages/NoPage';
import Skill from '../Pages/Skill';
import Navbar from '../Pages/Navbar';
const Allroutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/skill" element={<Skill />}></Route>
                <Route path="*" element={<NoPage />}></Route>
                <Route path="/nav" element={<Navbar />}></Route>
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}
                {/* <Route path="/" element={<Home />}></Route> */}

            </Routes>

        </div>
    )
}

export default Allroutes
