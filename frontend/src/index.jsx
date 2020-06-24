import React from "react"
import ReactDOM from "react-dom"
import App from "./main/app"
import "./index.css" 
import { BrowserRouter as Router, HashRouter } from "react-router-dom"

ReactDOM.render( 
    <Router>
        <App/>
    </Router>
    , document.getElementById("app") )