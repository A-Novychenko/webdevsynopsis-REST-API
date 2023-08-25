const {Schema, model} = require("mongoose");
const Joi = require("joi");
const {handleMongooseError} = require("../helpers");

const contactMongooseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is requared"],
    },
    description: {
      type: String,
      default: "Unfortunately, there is no description yet",
    },
    stack: {
      type: String,
      enum: [
        "htmlcss",
        "js",
        "react",
        "next",
        "ts",
        "node",
        "reactnative",
        "other",
      ],
      default: "other",
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },
  },
  {versionKey: false}
);

contactMongooseSchema.post("save", handleMongooseError);

const addPostSchema = Joi.object({
  title: Joi.string()
    .min(2)
    .max(255)
    .required()
    .messages({"any.required": "missing required title"}),
  description: Joi.string().min(2),
  stack: Joi.string().valid(
    "htmlcss",
    "js",
    "react",
    "next",
    "ts",
    "node",
    "reactnative",
    "other"
  ),
});

const schemas = {
  addPostSchema,
};

const Post = model("post", contactMongooseSchema);

module.exports = {schemas, Post};
