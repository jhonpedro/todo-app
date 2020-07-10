import Api from "../../services/api"

export const changeDescription = event => ({
    type: "DESCRIPTION_CHANGE",
    payload: event.target.value
})

export const search = (text = "") => {
    let searchQuery = "/"

    if (text) searchQuery += "?text=" + text

    return dispatch => (
        Api.get(searchQuery)
            .then(res => dispatch({
                type: "TODO_SEARCHED",
                payload: res
            }))
    )
}

export const add = description => {
    return dispatch => {
        Api.post("/", { description })
            .then(res => dispatch(clear()))
            .then(res => dispatch(search()))
    }
}

export const changeDone = (todo, done) => {
    return dispatch => {
        Api.put("/" + todo._id, { done })
            .then(res => dispatch({ type: "TODO_DONE" }))
            .then(res => dispatch(search()))
    }
}

export const removeTodo = todo => {
    return dispatch => {
        Api.delete("/" + todo._id)
            .then(res => dispatch(search()))
    }
}

export const clear = () => {
    return [{
        type: "TODO_CLEAR"
    }, search()]
}