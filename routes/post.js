const express = require("express")
const { getPosts, createPost } = require("../controllers/controller")
// const validator = require('../validator/index')


const router = express.Router()

router.get("/", getPosts);

router.post("/post", createPost);

module.exports = router;
