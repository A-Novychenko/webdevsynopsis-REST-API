const {controllerWrapper} = require("../../helpers");

const getAllPosts = require("./getAllPosts");
const addPost = require("./addPost");
const getPostById = require("./getPostById");

module.exports = {
  getAllPosts: controllerWrapper(getAllPosts),
  addPost: controllerWrapper(addPost),
  getPostById: controllerWrapper(getPostById),
};
