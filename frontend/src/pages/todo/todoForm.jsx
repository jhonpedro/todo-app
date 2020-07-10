import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Grid from "../../components/Grid"

import { changeDescription, search, add, clear } from "./todoActions"

import IconButton from "../../components/IconButton"
import { FaPlus, FaSearch, FaEraser } from "react-icons/fa"

class TodoForm extends React.Component {

    componentWillMount () {
        this.props.search()
    }

    handleKey = e => {
        const { add, description, search } = this.props

        if (e.key === "Enter") {
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === "Escape") {
            this.props.clear()
        }
    }

    render () {

        const { add, description, search, changeDescription, clear } = this.props

        return (
            <div className="row my-5">
                <Grid cols="12 9">
                    <input type="text"
                        className="form-control"
                        placeholder="Digite uma tarefa"
                        onChange={ changeDescription }
                        onKeyUp={ this.handleKey }
                        value={ description }
                    />
                </Grid>
                <Grid cols="12 3">
                    <IconButton onClick={ () => add(description) } style="info">
                        <FaPlus />
                    </IconButton>
                    <IconButton onClick={ () => search(description) } style="primary">
                        <FaSearch />
                    </IconButton>
                    <IconButton onClick={ () => clear() } style="secondary">
                        <FaEraser />
                    </IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ changeDescription, search, add, clear }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)