/* This is the model file where we set up the general data 
structure that we expect all of our blogs to have. */

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    // mongodb will automatically add a unique field _id to each entry
    title: { type: String, required: true, unique: true }, // titles are a required string that must be unique
    author: { type: String, required: true }, // authors are a required string
    content: { type: String, required: true }, // content is a required string
  },
  {
    collection: "all_blogs",
  }
);

const db = mongoose.connection.useDb("blog_proj");
const Blog = db.model("Blog", BlogSchema);

export default Blog;
