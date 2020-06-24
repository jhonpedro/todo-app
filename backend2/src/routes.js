const express = require("express"),
    routes = new express.Router(),
    TodoController = require("./controller/TodoController")
    
routes.get("/", TodoController.index)
routes.post("/", TodoController.store)
routes.put("/:id", TodoController.edit)
routes.delete("/:id", TodoController.delete)

module.exports = routes