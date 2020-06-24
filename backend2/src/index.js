const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    cors = require("cors")


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/todo2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(require("./routes"))

app.listen(8080)