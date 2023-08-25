// const {controllerWrapper} = require("../../helpers");
// const {HttpError} = require("../../helpers");
const {Post} = require("../../models/posts");

const getAllPosts = async (req, res) => {
  // console.log("req", req);
  const {stack} = req.query;
  // const {page = 1, limit = 20, favorite} = req.query;
  // const skip = (page - 1) * limit;
  // const filter = favorite === undefined ? null : {favorite};
  console.log("stack", stack);

  const result = await Post.find(
    {stack}
    // {
    //   skip,
    //   limit,
    // }
  );
  console.log("result", result);
  res.json({
    status: "success",
    code: 200,
    data: {
      posts: result,
    },
  });
};

module.exports = getAllPosts;
// // const {controllerWrapper} = require("../../helpers");
// // const {HttpError} = require("../../helpers");
// const {Post} = require("../../models/posts");

// const getAllPosts = async (req, res) => {
//   const {stack} = req.query;
//   const {page = 1, limit = 20, favorite} = req.query;
//   const skip = (page - 1) * limit;
//   // const filter = favorite === undefined ? null : {favorite};

//   const result = await Post.find(
//     {stack},
//     {
//       skip,
//       limit,
//     }
//   );

//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       posts: result,
//     },
//   });
// };

// module.exports = getAllPosts;
