import React, { Component } from "react"
import { createPortal } from "react-dom"

export default class Grid extends Component {
    
    constructor(props){
        super(props)

        this.cssCols = this.cssCols.bind(this)
    }

    cssCols(numbers) {
        const colNumbers = numbers ? numbers.split(" ") : []
        let classes = ""
        
        if(colNumbers[0]) classes += `col-xs-${colNumbers[0]}`
        if(colNumbers[1]) classes += ` col-sm-${colNumbers[1]} col-md-${colNumbers[1]} col-lg-${colNumbers[1]}`

        return classes
    }
    
    render(){
        return (
            <div className= {this.cssCols(this.props.cols || 12) + " my-1"} >
                {this.props.children}
            </div>
        )
    }
}