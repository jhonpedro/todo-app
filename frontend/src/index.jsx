import React from "react"
import ReactDOM from "react-dom"
import App from "./main/app"
import "./index.css"
import { BrowserRouter as Router, HashRouter } from "react-router-dom"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import Promise from "redux-promise"
import Multi from "redux-multi"
import Thunk from "redux-thunk"

import Reducers from "./store/storeonfig"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(Promise, Multi, Thunk)(createStore)(Reducers, devTools)

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById("app"))