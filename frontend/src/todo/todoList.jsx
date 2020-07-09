import React from "react"
import IconButton from "../template/IconButton"
import { FaCheck, FaTrash, FaUndoAlt } from "react-icons/fa"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { changeDone, removeTodo } from "./todoActions"

const TodoList = props => {

    const { changeDone, removeTodo } = props

    function renderRows () {
        const list = props.list || []
        return list.map(todo => {
            return (
                <tr key={ todo._id } className={ todo.done ? "marked-as-done" : "" }>
                    <td>{ todo.description }</td>
                    <td>
                        <IconButton style="success mb-1" hide={ todo.done }
                            onClick={ () => {
                                changeDone(todo, true)
                            } }
                        >
                            <FaCheck />
                        </IconButton>

                        <IconButton style="warning mb-1" hide={ !todo.done }
                            onClick={ () => {
                                changeDone(todo, false)
                            } }
                        >
                            <FaUndoAlt />
                        </IconButton>

                        <IconButton style="danger mb-1" hide={ !todo.done }
                            onClick={ () => {
                                removeTodo(todo)
                            } }
                        >
                            <FaTrash />
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
            { renderRows() }
        </tbody>
    </table>)
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ changeDone, removeTodo }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
