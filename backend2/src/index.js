const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(require("./routes"))

app.listen(process.env.RUNNING_PORT)