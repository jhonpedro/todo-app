import React from "react"

export default props => (
    <header className="border-bottom my-4">
        <h1 className="display-4"> { props.name } { props.br ? <br/> : "" } <small className="text-muted" >{ props.small }</small> </h1>
    </header>
)