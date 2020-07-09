import Api from "../services/api"

export const changeDescription = event => ({
    type: "DESCRIPTION_CHANGE",
    payload: event.target.value
})

export const search = (text = null) => {
    let searchQuery = "/"

    if(text) searchQuery +="?text=" + text
    
    const res = Api.get(searchQuery)
    return ({
        type: "TODO_SEARCHED",
        payload: res
    })
}

export const add = description => {
    return dispatch => {
        Api.post("/", { description })
            .then(dispatch(search()))
            .then(dispatch(clear()))
    }
}

export const changeDone = (todo, done) => {
    return dispatch => {
        Api.put("/" + todo._id, { done })
            .then(dispatch(search()))
    }
}

export const removeTodo = todo => {
    return dispatch => {
        Api.delete("/" + todo._id)
            .then(dispatch(search()))
    }
}

export const clear = () => {
    return ({
        type: "TODO_CLEAR"
    })
}