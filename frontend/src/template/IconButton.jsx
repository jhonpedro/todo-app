import React from "react"
import If from "./If"
import "./template.css"

export default props => {
    
    return (
    <If hide={props.hide}>
        <div className="d-inline-block mr-1" >
            <button className= {`btn btn-${props.style} mx-auto`}
                onClick={props.onClick}
            >
                <div  className="react-icons">
                    {props.children}
                </div>
            </button>
        </div>
    </If>)
}