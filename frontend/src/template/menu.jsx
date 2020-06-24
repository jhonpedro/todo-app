import React from "react"
import { Link } from "react-router-dom"
import Logo from "./todo.svg"

export default props => (
    <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
        <div className="container">
            <a href="/todos" className="navbar-brand">
                <img src={Logo} alt="Logo" height="40"/>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#hamb" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="hamb">
                <ul className=" navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/todos"  className="nav-link">ToDo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Sobre</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

);