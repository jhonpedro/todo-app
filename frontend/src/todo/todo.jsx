import React, { Component } from "react"
import Api from "../services/api"

import PageHeader from "../template/PageHeader"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = {
            description: "",
            list: [] 
        }
        this.refresh()
    }
    
    refresh = (description = "") => {

        const query = description ? `?text=${description}` : ""
        Api.get("/" + query).then( res => {
            this.setState({ description, list: res.data})
        })
    }

    handleSearch = () => {
        this.refresh(this.state.description)
    }

    handleClear = () => {
        this.refresh()
    }

    handleRemove = (todo) => {
        Api.delete("/" + todo._id).then(()=> {
            this.refresh(this.state.description)
        })
    }

    handleAdd = () => {
        Api.post("/", {
            description: this.state.description
        }).then( () => {
            this.refresh()
        })
    }

    handleChange = (event) => {
        this.setState({ ...this.state, description: event.target.value })
    }

    handleMark = (todo, mark) => {
        Api.put("/" + todo._id, { done: mark }).then(()=> {
            this.refresh(this.state.description)
        })
    }
    

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm 
                    value={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList
                    Todos={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMark={this.handleMark}
                />
            </div>
        );
    }
}