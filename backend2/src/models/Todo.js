const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    description: String,
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Todo", PostSchema)