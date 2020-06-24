import React from "react"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from "../template/menu"
import Routes from "./routes"

export default props => {
    return (<>
        <link rel="icon" href="../template/todo.svg"></link>
        <Navbar/>
        <Routes/>
    </>)
}

