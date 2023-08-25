// const {HttpError} = require("../../helpers");
const {Post} = require("../../models/posts");

const addPost = async (req, res) => {
  const result = await Post.create(req.body);
  res.status(201).json({status: "success", code: 201, data: {post: result}});
  // const {email, phone} = req.body;

  // const {_id: id} = req.user;
  // const emailIsOnTheList = await Contact.findOne({email});
  // const contactIsOnTheList = await Contact.findOne({phone});

  // if (emailIsOnTheList?.owner === id || contactIsOnTheList?.owner === id) {
  //   throw HttpError(
  //     409,
  //     `There is already a contact with this email ${email} or phone number ${phone} `
  //   );
  // }

  // const {_id: owner} = req.user;
  // const result = await Contact.create({...req.body, owner});
  // res.status(201).json({status: "success", code: 201, data: {contact: result}});
};

module.exports = addPost;
