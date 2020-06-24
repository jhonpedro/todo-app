import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Todo from "../todo/todo"
import About from "../about/about"

export default props => (
    <div className="container">
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/todos">
                <Todo/>
            </Route>
            <Route path="*">
                <Redirect to="/todos"/>
            </Route>
        </Switch>
    </div>
)