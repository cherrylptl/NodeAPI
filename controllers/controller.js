const Post = require("../models/postModel")

exports.getPosts = (req, res) => {
    const posts = Post.find().select("_id title body")
        .then(posts => {
            res.json({ posts });
        }).catch(err => { console.log(err) })
}


exports.createPost = (req, res) => {
    const post = new Post(req.body)
    console.log("Creating Post: ", req.body);

    post.save()
        .then(result => {
            res.json({ post: result });
        })
        .catch(err => {
            res.status(400).json({ error: err });
        });


    // post.save().then(result => {
    //     res.status(200).json({
    //         post: result
    //     });
    // })
}