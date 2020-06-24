const Post = require("../models/Todo")

module.exports = {
    async index(req, res){
        let posts = await Post.find().sort({createdAt: "desc"})

        if(req.query.text){
            const queryText = req.query.text.toLowerCase().trim()
            posts = posts.filter(post => {
                if(post.description.toLowerCase().includes(queryText)){
                    return post
                }
            })
        }

        return res.json(posts)
    },

    async store(req, res){
        const { description } = req.body

        let post = await Post.findOne({ description })

        if(!post){
            post = await Post.create({ description })
        }

        return res.json(post)

    },

    async edit(req, res){
        const { id } = req.params
        const { done } = req.body

        Post.findByIdAndUpdate({ _id: id }, { done }, (error, post)=> {
            if(error) return res.sendStatus(400)

            post.done = done

            return res.json(post)

        } )

    },

    async delete(req, res){
        const { id } = req.params

        Post.findByIdAndDelete({ _id: id }, (error, post) => {
            if(error){
                console.log(error)
                return res.sendStatus(400)
            } 

            res.status(200)
            return res.json(post)
            
        })
    }
}