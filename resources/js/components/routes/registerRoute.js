import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../home/header";
import Home from "../home/home";
import Aboutus from "../aboutus";
import Contact from "../contactus";
import Register from "../user/register";
import React from "react";
import Login from "../user/login";
import {Logout} from "../user/logout";

export default class RegisterRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aboutus" element={<Aboutus/>}/>
                    <Route path="/contactus" element={<Contact/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}
