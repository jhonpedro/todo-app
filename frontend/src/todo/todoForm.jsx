import React from "react"
import Grid from "../template/Grid"
import IconButton from "../template/IconButton"
import { FaPlus, FaSearch, FaEraser } from "react-icons/fa"

export default props => (
    <div className="row my-5">
        <Grid cols="12 9">
            <input type="text"
            className="form-control"
            placeholder="Digite uma tarefa"
            onChange={props.handleChange}
            value={props.value}
            />
        </Grid>
        <Grid cols="12 3">
            <IconButton onClick={props.handleAdd} style="info">
                <FaPlus/>
            </IconButton>
            <IconButton onClick={props.handleSearch} style="primary">
                <FaSearch/>
            </IconButton>
            <IconButton onClick={props.handleClear} style="secondary">
                <FaEraser/>
            </IconButton>
        </Grid>
    </div>
)