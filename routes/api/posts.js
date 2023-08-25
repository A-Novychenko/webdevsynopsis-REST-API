const express = require("express");
const router = express.Router();

const {getAllPosts, addPost} = require("../../controller/posts");

// const {authenticate} = require("../../middlewares");

const {schemas} = require("../../models/posts");
const {validateBody, isValidId} = require("../../middlewares");

router.get("/", getAllPosts);

router.post("/", validateBody(schemas.addPostSchema), addPost);

module.exports = router;
