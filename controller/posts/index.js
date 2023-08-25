const {controllerWrapper} = require("../../helpers");

const getAllPosts = require("./getAllPosts");
const addPost = require("./addPost");

module.exports = {
  getAllPosts: controllerWrapper(getAllPosts),
  addPost: controllerWrapper(addPost),
};
