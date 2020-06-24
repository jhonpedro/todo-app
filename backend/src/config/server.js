const express = require("express"),
    app = express(),
    cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.listen(8080)

module.exports = app