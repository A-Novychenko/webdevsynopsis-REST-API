const express = require("express");
const router = express.Router();

const {getAllPosts, addPost, getPostById} = require("../../controller/posts");

// const {authenticate} = require("../../middlewares");

const {schemas} = require("../../models/posts");
const {validateBody} = require("../../middlewares");
// const {validateBody, isValidId} = require("../../middlewares");

router.get("/", getAllPosts);

router.get("/item", getPostById);

router.post("/", validateBody(schemas.addPostSchema), addPost);

module.exports = router;
