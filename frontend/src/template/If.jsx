import React from "react"

export default props => {
    const hide = props.hide || false
    if(!hide){
        return props.children
    }else{
        return false
    }
}