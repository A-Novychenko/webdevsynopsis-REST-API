// const {controllerWrapper} = require("../../helpers");
// const {HttpError} = require("../../helpers");
const {Post} = require("../../models/posts");

const getPostById = async (req, res) => {
  const {id} = req.query;

  console.log("id", id);

  const post = await Post.findById(id);
  // console.log("result", post);

  res.json({
    status: "success",
    code: 200,

    post,
  });
};

module.exports = getPostById;
