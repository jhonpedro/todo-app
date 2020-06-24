import React from "react"
import IconButton from "../template/IconButton"
import { FaCheck, FaTrash, FaUndoAlt } from "react-icons/fa"

export default props => {
    function renderRows(){
        const list = props.Todos || []
        return list.map(todo => {
            return (
                <tr key={todo._id} className={ todo.done ? "marked-as-done" : "" }>
                    <td>{ todo.description }</td>
                    <td>
                        <IconButton style="success mb-1" hide={todo.done}
                            onClick={()=>{
                                props.handleMark(todo, true)
                            }}
                        >
                            <FaCheck/>
                        </IconButton>

                        <IconButton style="warning mb-1" hide={!todo.done}
                            onClick={()=>{
                                props.handleMark(todo, false)
                            }}
                        >
                            <FaUndoAlt/>
                        </IconButton>

                        <IconButton style="danger mb-1" hide={!todo.done}
                            onClick={()=> {
                                props.handleRemove(todo)
                            }}
                        >
                            <FaTrash/>
                        </IconButton>
                    </td>
                </tr>
            )
        })
    }

    return (<table className="table">
        <thead>
            <tr className="bg-dark text-white">
                <th className="w-75">Descrição</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>)
}
